import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "EL-Joy | Enterprise-Grade Software Studio",
        short_name: "EL-Joy",
        description: "We build world-class mobile, web, and AI solutions that transform businesses.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
            {
                src: "/images/logo/el-joy-full.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
