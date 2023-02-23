const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const locationSchema = mongoose.Schema(
  {
    link: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    show: {
      type: String,
      enum: ["true", "false"],
      default: "false",
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
