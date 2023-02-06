const mongoose = require("mongoose");
const cryptoSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const crypto = mongoose.model("crypto", cryptoSchema);
module.exports = crypto;
