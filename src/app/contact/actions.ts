"use server";

import { z } from "zod";
import { nile } from "@/lib/nile";

// Define the validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    projectType: z.string().min(1, "Project type is required"),
    budget: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
    success: boolean;
    message: string;
    errors?: {
        [key: string]: string[];
    };
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        projectType: formData.get("projectType"),
        budget: formData.get("budget"),
        message: formData.get("message"),
    };

    // Validate the data
    const validatedFields = contactSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { name, email, company, projectType, budget, message } = validatedFields.data;

        // Insert into Nile Database
        // We assume a 'leads' table exists. If not, we might fail here.
        // Nile usually comes with a built-in 'users' table or tenant isolation,
        // but for a simple contact form, we'll try to insert into a 'leads' table.
        // If table creation is needed, we might need a separate setup step or SQL execution.

        // Using parameterrized query for safety
        await nile.db.query(
            `INSERT INTO leads (name, email, company, project_type, budget, message)
       VALUES ($1, $2, $3, $4, $5, $6)`,
            [name, email, company, projectType, budget, message]
        );

        return {
            success: true,
            message: "Message sent! We'll get back to you shortly.",
        };
    } catch (error) {
        console.error("Database Error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
