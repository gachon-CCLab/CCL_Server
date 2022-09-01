"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
class Database {
    constructor() {
        this.pool = (0, mysql2_1.createPool)({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 30,
            queueLimit: 0,
            supportBigNumbers: true,
            bigNumberStrings: true,
        });
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance.pool.promise();
    }
    static async query(sql, options) {
        const connector = Database.getInstance();
        const [result] = await connector.query(sql, options);
        return result;
    }
}
exports.default = Database;
//# sourceMappingURL=database.lib.js.map