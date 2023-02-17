const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    currency: {
      type: String,
    },

    item: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
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
