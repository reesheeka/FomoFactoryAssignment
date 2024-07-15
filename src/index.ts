import express from "express";
import mongoose from "mongoose";
import route from "./routes/crypto";
import { Scheduler } from "./utils/schedular";

const app = express();

app.use(express.json());

app.use("/", route);

mongoose
  .connect(
    "mongodb+srv://rishika9306781119:h8wQLB4CzfNmNxdX@cluster0.znpkfb4.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

Scheduler();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
