const mongoose = require("mongoose");
const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    currency: {
      type: String,
    },
    userInfo: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const menu = mongoose.model("menu", menuSchema);
module.exports = menu;
