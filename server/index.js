import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import courseRouter from "./src/api/routes/courseRouter.js";
import errorHandler from "./src/api/middlewares/errorMiddleware.js";
import connectDB from "./src/api/config/connectDB.js";
import mongoose from "mongoose";
const app = express();

connectDB();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: "true",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/", errorHandler);

app.get("/", (req, res) => {
  res.send("Hello WOrld");
});

app.get("/api", (req, res) => {
  res.send("API");
});

app.use("/api", courseRouter);



mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB`);
  app.listen(27017, () => {
    console.log("Database is running at 27017");
  });
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection erro ${err}`);
});

app.listen(3000, () => console.log("Server is Running at 3000"));
