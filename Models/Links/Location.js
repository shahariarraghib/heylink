const mongoose = require("mongoose");
const locationSchema = mongoose.Schema(
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

const location = mongoose.model("location", locationSchema);
module.exports = location;
