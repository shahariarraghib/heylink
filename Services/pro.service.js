const pro = require("../Models/pro");

exports.createProService = async (data) => {
  const result = await pro.create(data);
  return result;
};

exports.getProService = async () => {
  const result = await pro.find({});
  return result;
};

exports.patchProServiceById = async (proId, patchData) => {
  console.log(proId.patchData);
  const result = await pro.updateOne(
    { _id: proId },
    { $set: patchData },
    { runValidators: true }
  );
  return result;
};
