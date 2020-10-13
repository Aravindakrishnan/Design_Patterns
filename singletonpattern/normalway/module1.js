// Importing MessageLogger class
const MessageLogger = require("./normally");
// Creating Object for MessageLogger class
const logger = new MessageLogger();

function execute1(message){
    logger.countLogs();
    logger.log(message);
    logger.countLogs();
}

// exporting the function
module.exports = execute1;