export declare const createUser: (user: any) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
export declare const getUser: (condition: string) => (param: string | number) => Promise<any>;
export declare const getUserByName: (param: string | number) => Promise<any>;
export declare const getUserById: (param: string | number) => Promise<any>;
