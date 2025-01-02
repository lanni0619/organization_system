const express = require("express");
const holderRoutes = require("./routes/holder.route");
const app = express();

app.use(express.json());
app.use("/api/policyholders", holderRoutes);

module.exports = app;

