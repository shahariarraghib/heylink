const mongoose = require("mongoose");
const musicSchema = mongoose.Schema(
  {
    link: {
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
