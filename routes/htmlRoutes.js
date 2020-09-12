const router = require("express").Router();
const path = require("path");

// main page
router.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// stats page
router.get("/stats", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// new exercise page
router.get("/exercise", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// existing exercise page
router.get("/exercise/:id", (req, res) => {
    res.status(200);
    console.log(req.params.id);
});

module.exports = router;