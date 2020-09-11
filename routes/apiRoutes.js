const router = require("express").Router();
const path = require("path");
const db = require("../models")

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

router.post("/api/workouts/", (req, res) => {
    let newWorkout = new db.Workout;
    console.log(newWorkout);

    newWorkout.save()
        .then(workout => {
            res.json(workout);
        })
});

router.get("/api/workouts/", (req, res) => {
    db.Workout.find().sort("day")
        .then(workouts => {
            res.json(workouts);
        })
});

router.get("/api/workouts/range/", (req, res) => {
    db.Workout.find()
        .then(workouts => {
            res.json(workouts);
        })
});

module.exports = router;