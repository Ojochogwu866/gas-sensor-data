const mongoose = require("mongoose");

const gasData = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
      unique: true,
    },
    data: [
      {
        temperature: {
          type: Number,
          maxlength: 250,
        },
        smoke: {
          type: Number,
          maxlength: 250,
        },
        co: {
          type: String,
          maxlength: 250,
        },
        humidity: {
          type: Number,
          maxlength: 250,
        },
        lpg: {
          type: Number,
          maxlength: 250,
        },
        latitude: {
          type: Number,
          validate: {
            validator: function (value) {
              return typeof value === "number" && Number.isFinite(value);
            },
          },
        },
        longitude: {
          type: Number,
          validate: {
            validator: function (value) {
              return typeof value === "number" && Number.isFinite(value);
            },
          },
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("GasData", gasData);
