const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const commerceSchema = mongoose.Schema(
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

const commerce = mongoose.model("commerce", commerceSchema);
module.exports = commerce;
