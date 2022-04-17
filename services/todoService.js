const axios = require("axios");


const todoService = () => {
    console.log("Real Todos");
    return axios.get(`${process.env.todosURL}`).then(result => result.data)
}

const todoServiceById = (id) => {
    console.log("Real Todo By Id");
    return axios.get(`${process.env.todosURL}${id}`).then(result => result.data)
}

module.exports = {
    todoService,
    todoServiceById
}