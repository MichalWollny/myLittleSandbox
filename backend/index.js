import express from "express";
import { errorHandler } from "./middleware/ErrorHandler.js";
import cors from "cors";
import "./db/server.js";
import Pallet from "./model/Pallet.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
