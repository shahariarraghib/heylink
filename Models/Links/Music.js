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

const music = mongoose.model("music", musicSchema);
module.exports = music;
