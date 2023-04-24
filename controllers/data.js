const GasData = require("../model/data");

const creategasData = async (req, res) => {
  try {
    const {
      deviceId,
      temperature,
      co,
      smoke,
      lpg,
      latitude,
      longitude,
      humidity,
    } = req.body;
    let device = await GasData.findOne({ deviceId });
    if (!device) {
      device = await GasData.create({ deviceId });
    }
    device.data.push({
      deviceId,
      temperature,
      co,
      smoke,
      lpg,
      latitude,
      longitude,
      humidity,
    });
    await device.save();
    res.status(201).json({ gasData: device.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create gas data record",
    });
  }
};

const getAllData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const gasData = await GasData.find({ _id: deviceId });

    res.json({ gasData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get gas data records" });
  }
};

/* Deprecated - 4-24/2023
const deleteDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const device = await GasData.findOneAndDelete({ _id: deviceId });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.json({ message: "Device deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete device" });
  }
};

// Update gas data record by dataId

const updateGasData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const { dataId } = req.params;
    const { temperature, smoke, lpg, co, humidity, latitude, longitude } =
      req.body;
    let device = await GasData.findOne({ _id: deviceId });
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    const gasData = await GasData.findOneAndUpdate(
      { _id: dataId, deviceId: device._id },
      { temperature, smoke, lpg, co, humidity, latitude, longitude },
      { new: true }
    );
    if (!gasData) {
      return res.status(404).json({ message: "Gas data record not found" });
    }
    res.status(200).json({ gasData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update gas data record" });
  }
};

const deleteGasData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const { dataId } = req.params;

    const device = await GasData.findOneAndUpdate(
      { _id: deviceId },
      { $pull: { data: { _id: dataId } } }
    );

    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    res.json({ message: "Gas data record deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete gas data record" });
  }
};
*/

module.exports = {
  creategasData,
  //updateGasData,
  //deleteDevice,
  getAllData,
  //deleteGasData,
};
