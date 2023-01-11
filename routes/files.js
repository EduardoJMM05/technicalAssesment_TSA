const express = require("express");
const router = express.Router();
const archivo = require("../services/file");

// routes for module
router.get("/", async (req, res, next) => {
    try {
        res.json(await archivo.getFiles());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await archivo.createFile(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/", async (req, res, next) => {
    try {
        res.json(await archivo.updateFile(req.query.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        res.json(await archivo.deleteFile(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

module.exports = router;
