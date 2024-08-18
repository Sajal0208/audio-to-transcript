import express from "express";
import { json } from "body-parser";
import { errorHandler } from "./middlewares/errors";

// Project dependencies

// Express initialization
const app = express();

// Middlewares
app.use(json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(errorHandler);

export default app;
