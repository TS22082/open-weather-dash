const axios = require("axios");
require("dotenv").config();

module.exports = {
  getWeather: async (req, res) => {
    if (!req.user) {
      res.send("Not authorized");
    } else {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${req.user.zip},us&appid=${process.env.WEATHER_KEY}`
        );
        res.send(response.data);
      } catch (err) {
        res.send(err);
      }
    }
  },
};
