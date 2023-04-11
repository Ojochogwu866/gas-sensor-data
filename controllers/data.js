const GasData = require("../model/data");

const creategasData = async (req, res) => {
  try {
    const gasData = new GasData(req.body);
    const savedGasData = await gasData.save();
    res.status(201).json(savedGasData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create GasData record",
    });
  }
};
const getgasData = async (req, res) => {
  try {
    const gasData = await GasData.find();
    res.json(gasData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to retrieve GasData records",
    });
  }
};

const getgasDataById = async (req, res) => {
  try {
    const gasDataId = req.params.id;
    const gasData = await GasData.findById(gasDataId);

    if (!gasData) {
      return res.status(404).json({
        message: "GasData record not found",
      });
    }

    res.json(gasData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to retrieve GasData record",
    });
  }
};

const updategasData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGasData = await GasData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedGasData) {
      return res.status(404).json({
        message: "GasData record not found",
      });
    }
    res.json(updatedGasData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update GasData record",
    });
  }
};
const deletegasData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGasData = await GasData.findByIdAndDelete(id);
    if (!deletedGasData) {
      return res.status(404).json({
        message: "GasData record not found",
      });
    }
    res.json(deletedGasData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete GasData record",
    });
  }
};

module.exports = {
  creategasData,
  deletegasData,
  updategasData,
  getgasDataById,
  getgasData,
};
