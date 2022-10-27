export class Logger {  

    constructor() {}

    static info(logText: string): void {
        console.log(new Date() + " info:::::" + logText);
    }

    static debug(logText: string): void {
        console.log(new Date() + " debug:::::" + logText);
    }

    static error(logText: string): void {
        console.log(new Date() + " error:::::" + logText);
    }
}