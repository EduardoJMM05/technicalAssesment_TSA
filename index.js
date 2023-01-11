const express = require("express");
const app = express();

const port = 3000;

const history = require("./routes/histories");
const modulo = require("./routes/modules");
const certification = require("./routes/certifications");
const file = require("./routes/files");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "OK" });
});

app.use("/history", history);
app.use("/module", modulo);
app.use("/certification", certification);
app.use("/file", file);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});
