require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const cors = require("cors");

// LOCAL IMPORTS
const errorMiddleware = require("./middleware/error");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }))

app.use("/api/users", require("./routes/user"));

app.use(errorMiddleware);

app.listen(port, () => console.log("Server running on port", port));
