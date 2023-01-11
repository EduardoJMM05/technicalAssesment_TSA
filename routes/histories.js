const express = require("express");
const router = express.Router();
const history = require("../services/history");

// routes for history_control
router.get("/", async (req, res, next) => {
    try {
        res.json(await history.getAllHistory());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await history.createHistory(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/", async (req, res, next) => {
    try {
        res.json(await history.updateHistory(req.query.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        res.json(await history.deleteHistory(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

// routes for history_control_type
router.get("/type", async (req, res, next) => {
    try {
        res.json(await history.getAllHistoryType());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/type", async (req, res, next) => {
    try {
        res.json(await history.createHistoryType(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/type", async (req, res, next) => {
    try {
        res.json(await history.updateHistoryType(req.query.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/type", async (req, res, next) => {
    try {
        res.json(await history.deleteHistoryType(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

module.exports = router;
