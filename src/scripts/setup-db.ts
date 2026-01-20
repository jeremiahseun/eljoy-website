import { Nile } from "@niledatabase/server";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

async function main() {
    console.log("Setting up database schema...");

    const nile = await Nile({
        user: process.env.NILEDB_USER,
        password: process.env.NILEDB_PASSWORD,
    });

    try {
        // Create the leads table
        await nile.db.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        project_type TEXT,
        budget TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
        console.log("✅ Table 'leads' created (if it didn't exist).");
    } catch (error) {
        console.error("❌ Error creating table:", error);
    }
}

main();
