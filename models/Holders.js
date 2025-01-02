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
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    referrer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "holders",
        key: "id",
      },
    },
    left_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "holders",
        key: "id",
      },
    },
    right_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "holders",
        key: "id",
      },
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "holders",
        key: "id",
      },
    },
  },
  {
    tableName: "holders",
    timestamps: false,
    hooks: {
      beforeCreate: async (holder) => {
        const count = await Holders.count();
        if (count > 0 && holder.referrer == null) {
          throw new Error("Non-root nodes must have a valid referrerId.");
        }
      },
    },
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
Holders.hasOne(Holders, {
  as: "parent",
  foreignKey: "parent_id",
});
Holders.belongsTo(Holders, {
  as: "ref",
  foreignKey: "referrer",
});

module.exports = Holders;

