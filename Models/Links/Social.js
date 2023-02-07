const mongoose = require("mongoose");
const socialSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const social = mongoose.model("social", socialSchema);
module.exports = social;
