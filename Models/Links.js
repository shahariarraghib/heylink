const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const linksSchema = mongoose.Schema(
  {
    links: [
      {
        link: {
          type: String,
        },
        image: {
          type: String,
        },
        activeFrom: {
          type: String,
        },
        activeUntile: {
          type: String,
        },
      },
    ],

    social: [
      {
        link: {
          type: String,
        },
      },
    ],

    gallery: [
      {
        data: { type: Buffer },
      },
    ],

    menu: [
      {
        data: { type: Buffer },
      },
    ],

    location: [{ location: { type: String } }],

    music: [{ music: { type: String } }],

    commerce: [
      {
        commerce: {
          type: String,
        },
      },
    ],

    apss: [
      {
        iosAppLinks: {
          type: String,
        },

        androidAppLinks: {
          type: String,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

const links = mongoose.model("links", linksSchema);
module.exports = links;

// const fs = require("fs");
// const contents = fs.readFileSync("/path/to/file.jpg", { encoding: "base64" });

// // Read the image file
// const imagePath = "C:/Users/Shahariar/Desktop/table1.png";
// const imageData = fs.readFileSync(imagePath);

// // Create a new image
// const newImage = new links({ data: imageData });

// // Save the image to MongoDB
// newImage.save((error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Image saved successfully!");
//   }
// });
