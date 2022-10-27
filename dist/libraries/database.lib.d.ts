import { DbQueryResult } from '../types/database';
import { Sql } from '../types/query';
declare class Database {
    private static instance;
    private pool;
    private constructor();
    static getInstance(): import("mysql2/promise").Pool;
    static query<T>(sql: Sql, options?: unknown): Promise<DbQueryResult<T>>;
}
export default Database;
