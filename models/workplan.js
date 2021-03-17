const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Excercise = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true
          },
          name: {
            type: String,
            trim: true,
            required: true
          },
          duration: {
            type: Number,
            required: true
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          runs: {
            type: Number
          }
      }
    ]
  });

  const Workplan = mongoose.model("workplan", Excercise);
  
  module.exports = Workplan;