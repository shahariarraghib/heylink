const mongoose = require("mongoose");
const gallerySchema = mongoose.Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
    },
  },

  {
    timestamps: true,
  }
);

const gallery = mongoose.model("gallery", gallerySchema);
module.exports = gallery;
