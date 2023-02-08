const mongoose = require("mongoose");
const commerceSchema = mongoose.Schema(
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

const commerce = mongoose.model("commerce", commerceSchema);
module.exports = commerce;
