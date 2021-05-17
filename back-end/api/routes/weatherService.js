const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

let Trie = require("../scripts/Trie");
let cityDetails = require("../../resources/city.list.json");
console.log(`${cityDetails.length} city's details are added to trie`);
let trie = new Trie();

cityDetails.forEach((cityObj) => {
    trie.addWord(cityObj.name.toLowerCase(), cityObj.coord);
});
cityDetails = null;

router.get("/citylist/:city", (req, res) => {
    let city = req.params.city.toLowerCase();
    try {
        const cities = trie.searchWords(city, 5);
        return res.json(cities);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get("/location/:lat/:lon", (req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon;

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${process.env.OpenWeather_API_KEY}&units=metric`;

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            return res.json(json);
        })
        .catch((err) => {
            return res.send(err);
        });
});

module.exports = router;
