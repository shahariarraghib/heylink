const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const musicSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
    show: {
      type: String,
      enum: ["true", "false"],
      default: "false",
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

const music = mongoose.model("music", musicSchema);
module.exports = music;
