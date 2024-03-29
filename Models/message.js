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
    turnOnName: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    turnOnEmail: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    turnOnPhoneNumber: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    turnOnOffMessage: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    messageText: {
      type: String,
    },
    successMessageText: {
      type: String,
    },

    userInfo: [
      {
        type: ObjectId,
        ref: "User",
        required: [true, "userInfo is required"],
      },
    ],
  },

  {
    timestamps: true,
  }
);

const message = mongoose.model("message", messageSchema);
module.exports = message;
