// Configuration for passport strategy keys.
const passportKeys = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    facebookAppID: process.env.FACEBOOK_APP_ID,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    jwtSecret: process.env.JWT_SECRET,
    server_URL: process.env.SERVER_URL
  };
  
  module.exports = passportKeys;