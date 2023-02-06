const mongoose = require("mongoose");
const musicSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const music = mongoose.model("music", musicSchema);
module.exports = music;
