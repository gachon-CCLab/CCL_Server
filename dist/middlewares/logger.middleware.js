"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() { }
    static info(logText) {
        console.log(new Date() + " info:::::" + logText);
    }
    static debug(logText) {
        console.log(new Date() + " debug:::::" + logText);
    }
    static error(logText) {
        console.log(new Date() + " error:::::" + logText);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.middleware.js.map