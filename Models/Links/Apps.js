const mongoose = require("mongoose");
const appsSchema = mongoose.Schema(
  {
    ioslink: {
      type: String,
    },
    androidlink: {
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

const apps = mongoose.model("apps", appsSchema);
module.exports = apps;
