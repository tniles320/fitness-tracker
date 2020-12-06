const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name is required",
      },
      distance: {
        type: Number,
        trim: true,
        required: "Total distance required",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Total duration required",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Weight lifted required",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Number of sets required",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Number of reps required",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
