const sequelize = require("../config/db");
const Holders = require("../models/Holders");
const query = require("../utils/query");

const createHolder = async (req, res, next) => {
  const { name, referrer, date } = req.body;

  let position = null;
  if (referrer) {
    position = await query.findPosition(referrer);
  }

  const newHolder = await Holders.create({
    name,
    referrer,
    parent_id: position ? position.root["id"] : null,
    date,
  });

  if (position) {
    position.root[position.side] = newHolder.id;
    await position.root.save();
  }

  res.status(201).json(newHolder);
};

const getSubtree = async (req, res, next) => {
  const { id } = req.query;

  const subtreeData = await query.getSubtreeData(id);
  if (!subtreeData) {
    return res.status(404).json({ error: "Policyholder not found" });
  }

  res.status(200).json(subtreeData);
};

const resetDB = (req, res, next) => {
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
};

module.exports = {
  createHolder,
  getSubtree,
  resetDB,
};

