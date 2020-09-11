const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: Array
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    let exerciseArr = this.exercises;

    exerciseArr.forEach(exercise => {
        totalDuration += exercise.duration;
    });

    return totalDuration;
})

const Workouts = mongoose.model("Workout", WorkoutSchema);

module.exports = Workouts;