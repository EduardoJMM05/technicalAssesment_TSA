const express = require("express");
const router = express.Router();
const modulo = require("../services/module");

// routes for module
router.get("/", async (req, res, next) => {
    try {
        res.json(await modulo.getModules());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await modulo.createModule(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/", async (req, res, next) => {
    try {
        res.json(await modulo.updateModule(req.query.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        res.json(await modulo.deleteModule(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

module.exports = router;
