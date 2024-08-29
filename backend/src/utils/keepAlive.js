//Server keep alive script

const axios = require("axios");

const SERVER_URL = `${process.env.BACKEND_SERVER_URL}`;

const INTERVAL_TIME = 1 * 60 * 1000; // 10 minutes

const keepServerAlive = () => {
  axios
    .get(SERVER_URL)
    .then((response) => {
      console.log(
        `Server is alive: ${response.status} - ${response.statusText}`
      );
    })
    .catch((error) => {
      console.error(`Error keeping the server alive: ${error.message}`);
    });
};

keepServerAlive();
setInterval(keepServerAlive, INTERVAL_TIME);
