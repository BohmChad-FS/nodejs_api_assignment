const axios = require("axios");

const drinkService = () => {
    console.log("Random Mixed Drink");
    return axios.get(`${process.env.drinkURL}`).then(result => {
        return result.data
    })
}

const drinkServiceId = (id) => {
    console.log("Mixed Drink ID");
    return axios.get(`${process.env.drinkIdURL}${id}`).then(result => {
        return result.data
    })
}

module.exports = {
    drinkService,
    drinkServiceId
}