//Server keep alive script

const axios = require("axios");
const cron = require("node-cron");

const SERVER_URL = `${process.env.BACKEND_SERVER_URL}`;

// Function to keep the server alive
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

cron.schedule("*/1 * * * *", keepServerAlive); //10 minutes

keepServerAlive();
