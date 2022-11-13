import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import packageRoutes from "./routes/packageRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import radTestRoutes from "./routes/radTestRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import labRoutes from "./routes/labRoutes.js";
import appearanceRoutes from "./routes/appearanceRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
dotenv.config();
app.use(express.static("public"));

app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/package", packageRoutes);
app.use("/test", testRoutes);
app.use("/radTest", radTestRoutes);
app.use("/lab", labRoutes);
app.use("/appearance", appearanceRoutes);
app.use("/prescriptions", prescriptionRoutes);
app.use("/order", orderRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({
  storage,
}).array("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    const data = req.files;
    const files = [];
    for (let i in data) {
      files.push(data[i].filename);
    }
    return res.status(200).send(files);
  });
});

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://baluyadav:Baluyadav@cluster0.ibjqvcr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
