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

// https://mongoosejs.com/docs/guide.html#virtuals
// gets the exercises from the workout and adds the duration and returns a totalDuration
// can't use arrow func and it uses this fun fact
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