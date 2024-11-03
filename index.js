const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.databse");

dotenv.config();
const app = express();

connectToDataBase();

app.get("/tasks", (req, res) => {
    const tasks = [{ description: "Estudar programação", isCompleted: false }];
    res.status(200).send(tasks);
});

app.listen(8000, () => console.log("Listening on port 8000!"));
