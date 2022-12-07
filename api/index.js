require("dotenv").config();
const port = process.env.PORT;
const express = require("express");

// LOCAL IMPORTS
const errorMiddleware = require("./middleware/error");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", require("./routes/user"));

app.use(errorMiddleware);

app.listen(port, () => console.log("Server running on port", port));
