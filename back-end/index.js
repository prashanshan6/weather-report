const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
// middleware to parse json from body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const weatherService = require("./api/routes/weatherService");
app.use("/api/weather", weatherService);

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});
