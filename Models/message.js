const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const messageSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
    name: {
      type: String,
    },
    emailaddress: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    datareceive: {
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

const message = mongoose.model("message", messageSchema);
module.exports = message;
