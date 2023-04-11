const mongoose = require("mongoose");

const gasData = new mongoose.Schema(
  {
    temperature: {
      type: Number,
      required: [true, "temperature value"],
      maxlength: 250,
    },
    smoke: {
      type: Number,
      required: [true, "smoke value"],
      maxlength: 250,
    },
    co: {
      type: String,
      required: [true, "co value"],
      maxlength: 250,
    },
    humidity: {
      type: Number,
      required: [true, "humidity value"],
      maxlength: 250,
    },
    lpg: {
      type: Number,
      required: [true, "lpg value"],
      maxlength: 250,
    },
    latitude: {
      type: Number,
      required: [true, "latitude value"],
      validate: {
        validator: function (value) {
          return typeof value === "number" && Number.isFinite(value);
        },
      },
    },
    longitude: {
      type: Number,
      required: [true, "longitude value"],
      validate: {
        validator: function (value) {
          return typeof value === "number" && Number.isFinite(value);
        },
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("GasData", gasData);
