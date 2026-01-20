'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Vector utilities
class Vector2D {
    constructor(public x: number, public y: number) { }

    static random(min: number, max: number): number {
        return min + Math.random() * (max - min)
    }
}

class Vector3D {
    constructor(public x: number, public y: number, public z: number) { }

    static random(min: number, max: number): number {
        return min + Math.random() * (max - min)
    }
}

// Animation Controller
class AnimationController {
    private timeline: gsap.core.Timeline
    private time = 0
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private dpr: number
    private size: number
    private stars: Star[] = []

    // Constants
    private readonly changeEventTime = 0.32
    private readonly cameraZ = -400
    private readonly cameraTravelDistance = 3400
    private readonly startDotYOffset = 28
    private readonly viewZoom = 100
    private readonly numberOfStars = 800
    private readonly trailLength = 0

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, dpr: number, size: number) {
        this.canvas = canvas
        this.ctx = ctx
        this.dpr = dpr
        this.size = size
        this.timeline = gsap.timeline({ repeat: -1 })

        // Initialize
        this.setupRandomGenerator()
        this.createStars()
        this.setupTimeline()
    }

    private setupRandomGenerator() {
        const originalRandom = Math.random
        const customRandom = () => {
            let seed = 1234
            return () => {
                seed = (seed * 9301 + 49297) % 233280
                return seed / 233280
            }
        }

        Math.random = customRandom()
        this.createStars()
        Math.random = originalRandom
    }

    private createStars() {
        for (let i = 0; i < this.numberOfStars; i++) {
            this.stars.push(new Star(this.cameraZ, this.cameraTravelDistance))
        }
    }

    private setupTimeline() {
        this.timeline
            .to(this, {
                time: 1,
                duration: 15,
                repeat: -1,
                ease: "none",
                onUpdate: () => this.render()
            })
    }

    public ease(p: number, g: number): number {
        if (p < 0.5)
            return 0.5 * Math.pow(2 * p, g)
        else
            return 1 - 0.5 * Math.pow(2 * (1 - p), g)
    }

    public easeOutElastic(x: number): number {
        const c4 = (2 * Math.PI) / 4.5
        if (x <= 0) return 0
        if (x >= 1) return 1
        return Math.pow(2, -8 * x) * Math.sin((x * 8 - 0.75) * c4) + 1
    }

    public map(value: number, start1: number, stop1: number, start2: number, stop2: number): number {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    public constrain(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max)
    }

    public lerp(start: number, end: number, t: number): number {
        return start * (1 - t) + end * t
    }

    // Square path - particles arranged in a square/box formation
    public squarePath(p: number): Vector2D {
        p = this.constrain(p, 0, 1)
        const size = 140 // Square size
        const perimeter = 4 * size
        const pos = p * perimeter

        let x: number, y: number

        if (pos < size) {
            // Top edge (left to right)
            x = -size / 2 + pos
            y = -size / 2
        } else if (pos < 2 * size) {
            // Right edge (top to bottom)
            x = size / 2
            y = -size / 2 + (pos - size)
        } else if (pos < 3 * size) {
            // Bottom edge (right to left)
            x = size / 2 - (pos - 2 * size)
            y = size / 2
        } else {
            // Left edge (bottom to top)
            x = -size / 2
            y = size / 2 - (pos - 3 * size)
        }

        return new Vector2D(x, y + this.startDotYOffset)
    }

    public spiralPath(p: number): Vector2D {
        // Blend factor: 0 = square, 1 = spiral
        // First 20% of animation: transition from square to spiral
        const blendTime = 0.20
        const blend = this.constrain(this.time / blendTime, 0, 1)
        const smoothBlend = this.ease(blend, 2.0)

        // Get square position
        const squarePos = this.squarePath(p)

        // Get spiral position
        const sp = this.constrain(1.2 * p, 0, 1)
        const easedP = this.ease(sp, 1.8)
        const numberOfSpiralTurns = 6
        const theta = 2 * Math.PI * numberOfSpiralTurns * Math.sqrt(easedP)
        const r = 170 * Math.sqrt(easedP)
        const spiralX = r * Math.cos(theta)
        const spiralY = r * Math.sin(theta) + this.startDotYOffset

        // Blend between square and spiral
        return new Vector2D(
            this.lerp(squarePos.x, spiralX, smoothBlend),
            this.lerp(squarePos.y, spiralY, smoothBlend)
        )
    }

    public rotate(v1: Vector2D, v2: Vector2D, p: number, orientation: boolean): Vector2D {
        const middle = new Vector2D(
            (v1.x + v2.x) / 2,
            (v1.y + v2.y) / 2
        )

        const dx = v1.x - middle.x
        const dy = v1.y - middle.y
        const angle = Math.atan2(dy, dx)
        const o = orientation ? -1 : 1
        const r = Math.sqrt(dx * dx + dy * dy)

        const bounce = Math.sin(p * Math.PI) * 0.05 * (1 - p)

        return new Vector2D(
            middle.x + r * (1 + bounce) * Math.cos(angle + o * Math.PI * this.easeOutElastic(p)),
            middle.y + r * (1 + bounce) * Math.sin(angle + o * Math.PI * this.easeOutElastic(p))
        )
    }

    public showProjectedDot(position: Vector3D, sizeFactor: number) {
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)
        const newCameraZ = this.cameraZ + this.ease(Math.pow(t2, 1.2), 1.8) * this.cameraTravelDistance

        if (position.z > newCameraZ) {
            const dotDepthFromCamera = position.z - newCameraZ

            const x = this.viewZoom * position.x / dotDepthFromCamera
            const y = this.viewZoom * position.y / dotDepthFromCamera
            const sw = 400 * sizeFactor / dotDepthFromCamera

            this.ctx.lineWidth = sw
            this.ctx.beginPath()
            this.ctx.arc(x, y, 0.5, 0, Math.PI * 2)
            this.ctx.fill()
        }
    }

    private drawStartDot() {
        if (this.time > this.changeEventTime) {
            const dy = this.cameraZ * this.startDotYOffset / this.viewZoom
            const position = new Vector3D(0, dy, this.cameraTravelDistance)
            this.showProjectedDot(position, 2.5)
        }
    }

    public render() {
        const ctx = this.ctx
        if (!ctx) return

        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, this.size, this.size)

        ctx.save()
        ctx.translate(this.size / 2, this.size / 2)

        const t1 = this.constrain(this.map(this.time, 0, this.changeEventTime + 0.25, 0, 1), 0, 1)
        const t2 = this.constrain(this.map(this.time, this.changeEventTime, 1, 0, 1), 0, 1)

        ctx.rotate(-Math.PI * this.ease(t2, 2.7))

        this.drawTrail(t1)

        ctx.fillStyle = 'white'
        for (const star of this.stars) {
            star.render(t1, this)
        }

        this.drawStartDot()

        ctx.restore()
    }

    private drawTrail(t1: number) {
        // Draw a square outline that grows with the animation
        const growStart = 0.15
        const disperseStart = 0.35

        // Only draw trail during grid phase
        if (this.time >= disperseStart) return

        // Calculate growth factor (same as Star render)
        let growthFactor = 1.0
        if (this.time < growStart) {
            growthFactor = 1.0 + 0.1 * Math.sin(this.time / growStart * Math.PI)
        } else if (this.time < disperseStart) {
            const growProgress = (this.time - growStart) / (disperseStart - growStart)
            const smoothGrow = this.ease(growProgress, 2.0)
            growthFactor = 1.0 + smoothGrow * 2.5
        }

        const baseSize = 14 * 12 // gridSize * baseSpacing
        const size = baseSize * growthFactor / 2
        const halfSize = size / 2

        // Draw glowing square outline
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
        this.ctx.lineWidth = 2
        this.ctx.beginPath()
        this.ctx.rect(-halfSize, -halfSize + this.startDotYOffset, size, size)
        this.ctx.stroke()

        // Draw corner dots for emphasis
        const corners = [
            [-halfSize, -halfSize],
            [halfSize, -halfSize],
            [halfSize, halfSize],
            [-halfSize, halfSize]
        ]

        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        for (const [cx, cy] of corners) {
            this.ctx.beginPath()
            this.ctx.arc(cx, cy + this.startDotYOffset, 3, 0, Math.PI * 2)
            this.ctx.fill()
        }
    }

    public pause() {
        this.timeline.pause()
    }

    public resume() {
        this.timeline.play()
    }

    public destroy() {
        this.timeline.kill()
    }
}

// Star class
class Star {
    private dx: number
    private dy: number
    private spiralLocation: number
    private strokeWeightFactor: number
    private z: number
    private angle: number
    private distance: number
    private rotationDirection: number
    private expansionRate: number
    private finalScale: number

    constructor(cameraZ: number, cameraTravelDistance: number) {
        this.angle = Math.random() * Math.PI * 2
        this.distance = 30 * Math.random() + 15
        this.rotationDirection = Math.random() > 0.5 ? 1 : -1
        this.expansionRate = 1.2 + Math.random() * 0.8
        this.finalScale = 0.7 + Math.random() * 0.6

        this.dx = this.distance * Math.cos(this.angle)
        this.dy = this.distance * Math.sin(this.angle)

        this.spiralLocation = (1 - Math.pow(1 - Math.random(), 3.0)) / 1.3
        this.z = Vector2D.random(0.5 * cameraZ, cameraTravelDistance + cameraZ)

        const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t
        this.z = lerp(this.z, cameraTravelDistance / 2, 0.3 * this.spiralLocation)
        this.strokeWeightFactor = Math.pow(Math.random(), 2.0)
    }

    render(p: number, controller: AnimationController) {
        const time = controller['time']

        // Animation phases:
        // Phase 1 (0-20%): Square grid visible, slightly growing
        // Phase 2 (20-40%): Square grows larger
        // Phase 3 (40-100%): Particles disperse outward

        const growStart = 0.15
        const disperseStart = 0.35

        // Calculate grid position (square formation)
        const gridSize = 14 // 14x14 grid
        const baseSpacing = 12
        const gridIndex = Math.floor(this.spiralLocation * gridSize * gridSize) % (gridSize * gridSize)
        const gridRow = Math.floor(gridIndex / gridSize)
        const gridCol = gridIndex % gridSize

        // Calculate growth factor
        let growthFactor = 1.0
        if (time < growStart) {
            // Initial square - slight pulse
            growthFactor = 1.0 + 0.1 * Math.sin(time / growStart * Math.PI)
        } else if (time < disperseStart) {
            // Growing phase
            const growProgress = (time - growStart) / (disperseStart - growStart)
            const smoothGrow = controller.ease(growProgress, 2.0)
            growthFactor = 1.0 + smoothGrow * 2.5 // Grow to 3.5x size
        } else {
            growthFactor = 3.5
        }

        const spacing = baseSpacing * growthFactor
        const gridX = (gridCol - gridSize / 2 + 0.5) * spacing
        const gridY = (gridRow - gridSize / 2 + 0.5) * spacing + controller['startDotYOffset']

        if (time < disperseStart) {
            // Show grid (initial or growing)
            const vx = (this.z - controller['cameraZ']) * gridX / controller['viewZoom']
            const vy = (this.z - controller['cameraZ']) * gridY / controller['viewZoom']
            const position = new Vector3D(vx, vy, this.z)

            // Size animation
            let dotSize = 5 * this.strokeWeightFactor
            if (time >= growStart) {
                // Particles get slightly bigger as they spread
                const growProgress = (time - growStart) / (disperseStart - growStart)
                dotSize = (5 + 3 * growProgress) * this.strokeWeightFactor
            }

            controller.showProjectedDot(position, dotSize)
        } else {
            // Dispersion phase - particles fly outward from their grid positions
            const disperseProgress = (time - disperseStart) / (1 - disperseStart)
            const smoothDisperse = controller.easeOutElastic(controller.constrain(disperseProgress * 1.2, 0, 1))

            // Each particle disperses in its own random direction
            const disperseDistance = this.distance * this.expansionRate * 4 * smoothDisperse
            const disperseAngle = this.angle + this.rotationDirection * disperseProgress * Math.PI * 0.5

            const screenX = gridX + disperseDistance * Math.cos(disperseAngle)
            const screenY = gridY + disperseDistance * Math.sin(disperseAngle)

            const vx = (this.z - controller['cameraZ']) * screenX / controller['viewZoom']
            const vy = (this.z - controller['cameraZ']) * screenY / controller['viewZoom']
            const position = new Vector3D(vx, vy, this.z)

            // Particles fade and shrink as they disperse
            const fadeProgress = controller.constrain(disperseProgress * 1.5, 0, 1)
            const sizeFade = 1 - fadeProgress * 0.7
            const dotSize = 8 * this.strokeWeightFactor * sizeFade * this.finalScale

            controller.showProjectedDot(position, dotSize)
        }
    }
}

export function SpiralAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<AnimationController | null>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Pause animation when not visible to save resources
    useEffect(() => {
        const container = containerRef.current
        if (!container || !animationRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animationRef.current?.resume()
                    } else {
                        animationRef.current?.pause()
                    }
                })
            },
            { threshold: 0.1 }
        )

        observer.observe(container)
        return () => observer.disconnect()
    }, [dimensions]) // Re-run when animation is created

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Cap DPR at 1.5 for performance (retina is overkill for particle animation)
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
        const size = Math.max(dimensions.width, dimensions.height)

        canvas.width = size * dpr
        canvas.height = size * dpr

        canvas.style.width = `${dimensions.width}px`
        canvas.style.height = `${dimensions.height}px`

        ctx.scale(dpr, dpr)

        animationRef.current = new AnimationController(canvas, ctx, dpr, size)

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy()
                animationRef.current = null
            }
        }
    }, [dimensions])

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    )
}
