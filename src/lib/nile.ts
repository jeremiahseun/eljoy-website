import { Nile } from "@niledatabase/server";

// Initialize the Nile server client
// The SDK automatically reads from NILEDB_USER, NILEDB_PASSWORD, etc. if not provided,
// but we pass them explicitly here to be sure, matching the .env.local keys.

export const nile = await Nile({
    user: process.env.NILEDB_USER,
    password: process.env.NILEDB_PASSWORD,
});

export type NileClient = typeof nile;
