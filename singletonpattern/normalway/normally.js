
class MessageLogger {
    constructor() {
        this.logs = [];
    }

    countLogs() {
        console.log(`Logs Count :${this.logs.length}`);
    }

    log(message) {
        this.logs.push(message);
        console.log(`${message} is Logged in Logs`);
    }
}

module.exports = MessageLogger;
