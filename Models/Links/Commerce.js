const mongoose = require("mongoose");
const commerceSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const commerce = mongoose.model("commerce", commerceSchema);
module.exports = commerce;