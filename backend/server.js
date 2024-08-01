import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4001;

// await mongoose.connect(process.env.MONGO_URL);
// console.log("Connected to MongoDB");

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.get("*", (req, res) =>
//   res.sendFile(path.join(path.resolve(), "frontend/dist/index.html"))
// );
