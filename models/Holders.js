const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Holders = sequelize.define(
  "holders",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Name of holder",
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Join date",
    },
    referrer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "referrer's ID",
      references: {
        model: "holders",
        key: "id",
      },
    },
    left_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Left child's ID",
      references: {
        model: "holders", // 表名稱，區分大小寫
        key: "id",
      },
    },
    right_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Right child's ID",
      references: {
        model: "holders", // 表名稱，區分大小寫
        key: "id",
      },
    },
  },
  {
    tableName: "holders", // 指定資料表名稱
    timestamps: false, // 不使用 createdAt 和 updatedAt 欄位
    comment: "Holders data",
  }
);

Holders.hasOne(Holders, {
  as: "leftChild",
  foreignKey: "left_child",
});
Holders.hasOne(Holders, {
  as: "rightChild",
  foreignKey: "right_child",
});
Holders.belongsTo(Holders, {
  as: "ref",
  foreignKey: "referrer",
});

module.exports = Holders;

