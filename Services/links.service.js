const links = require("../Models/Links");
const ObjectId = require("mongodb").ObjectId;

exports.createlinksCommonService = async (link) => {
  const result = await links.create(link);
  return result;
};

exports.getlinksCommonService = async () => {
  const result = await links.find();
  return result;
};

exports.deletelinksCommonService = async (routeType, id) => {
  let result;
  if (routeType === "links") {
    result = await links.updateMany({
      $pull: { links: { _id: ObjectId(id) } },
    });
  } else if (routeType === "gallery") {
  }

  return result;
};

exports.patchlinksCommonByIdService = async (linkId, patchData) => {
  const result = await links.updateOne(
    { _id: linkId },
    { $set: patchData },
    { runValidators: true }
  );
  return result;
};
