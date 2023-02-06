const mongoose = require("mongoose");
const locationSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const location = mongoose.model("location", locationSchema);
module.exports = location;
