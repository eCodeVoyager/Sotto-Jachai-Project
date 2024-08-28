/**
* Module index file for the application.
* @module index
* @requires module:auth
* @requires module:verify
* @requires module:content
* @exports {Object} - The application modules.
*/

const auth = require('./modules/auth');
const verify = require('./modules/verify');
const content = require('./modules/content');

module.exports = {
 auth,
 verify,
 content
};