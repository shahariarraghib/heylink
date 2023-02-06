const mongoose = require("mongoose");
const linksSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    activeFrom: {
      type: String,
    },
    activeUntile: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const common = mongoose.model("common", linksSchema);
module.exports = common;
