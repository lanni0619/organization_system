const express = require("express");
const sequelize = require("./config/db");
const Holders = require("./models/Holders");

const app = express();

app.use(express.json());

app.post("/api/v1/holders", async (req, res, next) => {});
app.get("/api/v1/holder/:id", (req, res, next) => {});
app.get("/api/v1/holders", (req, res, next) => {});

app.get("/api/v1/reset", (req, res, next) => {
  (async () => {
    try {
      await sequelize.sync({ force: true }); // { force: true } {alter: true}
      res.status(200).json("Force reset table successfully");
    } catch (error) {
      console.error("Fail to sync:", error);
    } finally {
      await sequelize.close();
    }
  })();
});

module.exports = app;

