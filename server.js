const express = require("express");
require("dotenv").config();

const {
    todoService
} = require("./services/todoService");

const app = express();

// for localhost:3000/
app.get("/", (req, res, next) => {
    res.status(200).send("Service is UP!!")
});

// get external service
// http://localhost:3000/todo
app.get("/todo", (req, res, next) => {
    todoService.then(result => res.status(200).json(result)).
    catch(err => res.status(501).json({
        error: {
            message: err.message,
            status: err.status
        }
    }))
})


app.listen("process.env.port", () => {
    console.log(`Server Starting on port ${process.env.port}`);
})