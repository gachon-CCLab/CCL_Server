import { RowDataPacket, OkPacket } from 'mysql2';
export declare type DbDefaults = RowDataPacket[] | RowDataPacket[][] | OkPacket[] | OkPacket;
export declare type DbQueryResult<T> = T & DbDefaults;
