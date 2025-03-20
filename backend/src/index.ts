import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelRoutes from "./routes/my-hotels";
import hotelRoutes from "./routes/hotels";
import bookingRoutes from "./routes/my-bookings";

import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

// Create an instance of express
const app = express();

// Use express middleware to parse JSON and URL-encoded data
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS with credentials and specific allowed origin
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow only this frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Apply CORS middleware with the options
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Define API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/my-bookings", bookingRoutes);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});
// Start the server
app.listen(1111, () => {
  console.log("Server is running on port 1111");
});
