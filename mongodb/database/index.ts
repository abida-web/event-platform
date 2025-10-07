import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let cashed = (global as any).mongoose || { conn: null, promis: null };

export const connectToDatabase = async () => {
  if (cashed.conn) return cashed.conn;
  if (!MONGODB_URI) throw new Error("Mongodb uri doent exist");
  cashed.promis =
    cashed.promis ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });
  cashed.conn = await cashed.promis;
  return cashed.conn;
};
