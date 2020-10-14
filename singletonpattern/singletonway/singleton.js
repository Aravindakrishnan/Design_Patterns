/*
    Singleton Design Pattern

            ✡ Singleton Pattern is just a way of creating Single
            Object.

            ✡ That Object will share Bunch of Different Resources

           ✡ Without having recreating that object or losing the Information

*/
class MessageLogger {
    constructor() {
        if(MessageLogger.instance == null){
            this.logs = [];
            MessageLogger.instance = this;
        }
        return MessageLogger.instance;
    }

    countLogs() {
        console.log(`Logs Count :${this.logs.length}`);
    }

    log(message) {
        this.logs.push(message);
        console.log(`${message} is Logged in Logs`);
    }

    getLogs(){
        return this.logs;
    }
}


const logger = new MessageLogger();


// We Freeze that Object so , it Will Become Immutable
Object.freeze(logger);

/*
==> Note :
    We can do that ,
        logger.hello  = "hello world";
    But ,
        console.log(logger.hello); // we will get undefined
*/

module.exports = logger;
