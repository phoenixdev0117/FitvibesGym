import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGODB_URL } from "../config";

// Configure NodeJS App Environment Variables
dotenv.config({ path: ".env" });

mongoose.set('strictQuery', false); 

const db = mongoose.connect(MONGODB_URL);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Mongodb connected to db");
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
export default db;
