import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with EL-Joy for your next software project. Whether it's mobile, web, or AI, we're ready to bring your vision to life.",
    alternates: {
        canonical: "https://eljoy.tech/contact",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
