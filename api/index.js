require("dotenv").config();
const port = process.env.PORT;
const express = require("express");

const app = express();

app.use("/api/users", require("./routes/user"))

app.listen(port, () => console.log("Server running on port", port));