const {
  createlinksCommonService,
  getlinksCommonService,
  deletelinksCommonService,
  patchlinksCommonByIdService,
} = require("../Services/links.service");

exports.createLinksCommon = async (req, res, next) => {
  try {
    const result = await createlinksCommonService(req.body);

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

exports.getLinksCommon = async (req, res, next) => {
  try {
    const result = await getlinksCommonService();

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

exports.deleteLinksCommon = async (req, res, next) => {
  try {
    const { id, name } = req.params;
    const result = await deletelinksCommonService(name, id);
    /*   if (!result.deletedCount) {
      res.status(400).json({
        status: "fail",
        message: "Data couldn't delete",
        error: "Data couldn't delete",
      });
    } */

    res.status(200).json({
      status: "success",
      message: "Data delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data is not Delete",
      error: error.message,
    });
  }
};

exports.patchLinksCommonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchlinksCommonByIdService(id, req.body);
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
