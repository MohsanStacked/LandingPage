import express from "express";
import cors from "cors";

import userRoute from "../routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

app.use("/api", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
