"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    info(logText) {
        console.log(new Date() + " info:::::" + logText);
    }
    debug(logText) {
        console.log(new Date() + " debug:::::" + logText);
    }
    error(logText) {
        console.log(new Date() + " error:::::" + logText);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map