import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// DB CONNECTION
mongoose
  .connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    connectTimeoutMS: 10000,
    poolSize: 10,
    writeConcern: {
      j: true,
    },
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Database connection error!", err));

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//DEFINE ROUTES
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/stripe"));
app.use("/api", require("./routes/listing"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
