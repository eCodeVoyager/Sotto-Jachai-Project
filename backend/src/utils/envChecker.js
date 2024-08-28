const dotenv = require('dotenv');
dotenv.config();

/**
 * Checks if all required environment variables are set.
 * Logs a warning if any variables are missing.
 */
const checkEnvVariables = () => {
  const requiredVariables = [
    'MONGO_URI',
    'ACCESS_TOKEN_SECRET',
    'ACCESS_TOKEN_LIFE',
    'PORT',
    'LOGGER_LEVEL',
    'SERVER_URL',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
  ];

  const missingVariables = requiredVariables.filter(
    variable => !process.env[variable]
  );

  if (missingVariables.length > 0) {
    console.log(
      `⚠️  Missing environment variables: ${missingVariables.join(', ')}`
    );
  } else {
    console.log('✅ All required environment variables are set.');
  }
};

module.exports = checkEnvVariables;