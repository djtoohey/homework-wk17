const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/exercise/:id", (req, res) => {
    res.status(200);
    console.log(req.params.id);
});

module.exports = router;