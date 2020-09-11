const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: Array
});

const Workouts = mongoose.model("Workout", WorkoutSchema);

module.exports = Workouts;