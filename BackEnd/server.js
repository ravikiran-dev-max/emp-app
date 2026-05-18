import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import {config} from 'dotenv';
import cors from "cors";
config();

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL)
    console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});