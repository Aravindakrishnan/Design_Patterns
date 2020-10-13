const logger = require("./singleton");


logger.countLogs();

logger.log("Hey There Buddy 1");
logger.log("Hey There Buddy 2");

logger.countLogs();

console.log(logger.getLogs());
