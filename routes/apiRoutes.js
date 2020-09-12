const router = require("express").Router();
const path = require("path");
const db = require("../models")

// add a new exercise
router.put("/api/workouts/:id", (req, res) => {
    let workoutId = req.params.id;
    let newExercise = req.body;

    let update = {
        $push: { exercises: newExercise }
    }

    let opt = {
        useFindAndModify: false
    }

    db.Workout.findByIdAndUpdate(workoutId, update, opt)
        .then(workout => {
            res.json(workout);


        })
});

// add new workout
router.post("/api/workouts/", (req, res) => {
    let newWorkout = new db.Workout;
    console.log(newWorkout);

    newWorkout.save()
        .then(workout => {
            res.json(workout);
        })
});

// get workouts
router.get("/api/workouts/", (req, res) => {
    db.Workout.find().sort("day")
        .then(workouts => {
            res.json(workouts);
        })
});

// get workouts within a range
router.get("/api/workouts/range/", (req, res) => {
    db.Workout.find()
        .then(workouts => {
            res.json(workouts);
        })
});

module.exports = router;