const {
  createMessageService,
  getMessageService,
  deleteMessageServiceById,
} = require("../Services/message.service");

exports.createMessage = async (req, res, next) => {
  try {
    const result = await createMessageService(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getMessage = async (req, res, next) => {
  try {
    const userId = req.user?._id;
    const result = await getMessageService(userId);

    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

// exports.patchProById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await patchProServiceById(id, req.body);
//     res.status(200).json({
//       status: "success",
//       message: "Data get successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "error",
//       message: "Data couldn't get",
//       error: error.message,
//     });
//   }
// };

exports.deleteMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteMessageServiceById(id);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};
