const logger = require("./singleton");

logger.countLogs();

logger.log("Never Stop Learning 1");
logger.log("Never Stop Learning 2");
logger.log("Never Stop Learning 3");
logger.log("Never Stop Learning 4");
logger.log("Never Stop Learning 5");

logger.countLogs();


console.log(logger.getLogs());