require("colors");
require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT;
const cors = require("cors");
const express = require("express");

// LOCAL IMPORTS
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/error");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({ origin: ["http://192.168.43.231:5000", "http://localhost:5000"] })
);

// ROUTES
app.use("/api/users", require("./routes/user"));

// ERROR
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`.blue.bold));

// TODO Log all errors in a file
