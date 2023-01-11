const express = require("express");
const router = express.Router();
const certification = require("../services/certification");

// routes for certification
router.get("/", async (req, res, next) => {
    try {
        res.json(await certification.getCertifications());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        res.json(await certification.createCertificaction(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/", async (req, res, next) => {
    try {
        res.json(
            await certification.updateCertification(req.query.id, req.body)
        );
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/", async (req, res, next) => {
    try {
        res.json(await certification.deleteCertification(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

// routes for certification_type
router.get("/type", async (req, res, next) => {
    try {
        res.json(await certification.getCertificationTypes());
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post("/type", async (req, res, next) => {
    try {
        res.json(await certification.createCertificationType(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put("/type", async (req, res, next) => {
    try {
        res.json(
            await certification.updateCertificationType(req.query.id, req.body)
        );
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete("/type", async (req, res, next) => {
    try {
        res.json(await certification.deleteCertificationType(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

module.exports = router;
