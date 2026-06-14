import mongoose from "mongoose";

const MONGODB_URI = <string>process.env.NEXT_PUBLIC_MONGODB_URI;
if (!MONGODB_URI) { throw new Error("Please define MONGODB_URI in .env file."); }

let cached = (global as any).mongoose;
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectDb() {
    if (cached.conn) { return cached.conn }
    if (!cached.promise) { cached.promise = mongoose.connect(MONGODB_URI); }
    cached.conn = await cached.promise;
    return cached.conn;
}