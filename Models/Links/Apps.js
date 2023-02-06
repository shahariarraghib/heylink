const mongoose = require("mongoose");
const appsSchema = mongoose.Schema(
  {
    ioslink: {
      type: String,
    },
    androidlink: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const apps = mongoose.model("apps", appsSchema);
module.exports = apps;
