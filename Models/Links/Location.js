const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const locationSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
    userInfo: [
      {
        type: ObjectId,
        ref: "User",
        required: [true, "userInfo is required"],
      },
    ],
  },

  {
    timestamps: true,
  }
);

const location = mongoose.model("location", locationSchema);
module.exports = location;
