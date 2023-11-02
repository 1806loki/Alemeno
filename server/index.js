import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import courseListRouter from "./src/api/routes/courseRouter.js";
import errorHandler from "./src/api/middlewares/errorMiddleware.js";
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
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

app.use("/api", courseListRouter,);


app.listen(3000, () => console.log("Server is Running at 3000"));
