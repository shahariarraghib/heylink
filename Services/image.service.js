const links = require("../Models/Links");
const ObjectId = require("mongodb").ObjectId;

// exports.createlinksCommonService = async (bodyData) => {
//   const result = await links.create(bodyData);
//   return result;
// };

// exports.getlinksCommonService = async () => {
//   const result = await links.find();
//   return result;
// };

// exports.deletelinksCommonService = async (routeType, id) => {
//   let result;
//   if (routeType === "links") {
//     result = await links.updateMany({
//       $pull: { links: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "social") {
//     result = await links.updateMany({
//       $pull: { social: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "gallery") {
//     result = await links.updateMany({
//       $pull: { gallery: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "menu") {
//     result = await links.updateMany({
//       $pull: { menu: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "location") {
//     result = await links.updateMany({
//       $pull: { location: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "music") {
//     result = await links.updateMany({
//       $pull: { music: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "commerce") {
//     result = await links.updateMany({
//       $pull: { commerce: { _id: ObjectId(id) } },
//     });
//   } else if (routeType === "apss") {
//     result = await links.updateMany({
//       $pull: { apss: { _id: ObjectId(id) } },
//     });
//   }

//   return result;
// };

exports.patchImageCommonByIdService = async (linkId, patchData) => {
  //   console.log(linkId, patchData);
  //   const uploadedData = {
  //     image: {
  //       data: patchData.filename,
  //       contentType: patchData.mimetype,
  //     },
  //   };
  //   console.log(uploadedData, "jjf");

 
    const result = await links.updateOne(
      { _id: linkId },
      { $set: patchData },
      { runValidators: true }
    );
    return result;
  };

