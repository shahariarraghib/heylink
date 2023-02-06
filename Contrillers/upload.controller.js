const { patchImageCommonByIdService } = require("../Services/image.service");

exports.uploadImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchImageCommonByIdService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "photo is uploaded",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "photo couldn't uploaded",
      error: error.message,
    });
  }
};
