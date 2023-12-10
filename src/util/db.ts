import {
    SQLiteDatabase,
    openDatabase,
    enablePromise,
} from 'react-native-sqlite-storage';
import { Bus } from '../model/bus';

enablePromise(true);

export const getDBConnection = async () => {
    return openDatabase({ name: 'busnative.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
    const query = `CREATE TABLE IF NOT EXISTS BUS(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        spotted INTEGER NOT NULL CHECK (spotted IN (0, 1)),
        dateAdded TEXT NOT NULL,
        dateSpotted TEXT,
        CONSTRAINT unique_name UNIQUE (name)
    )`;

    await db.executeSql(query);
};

export const getBusses = async (db: SQLiteDatabase): Promise<Bus[]> => {
    try {
        const busses: Bus[] = [];
        const result = await db.executeSql('SELECT * FROM BUS;');
        result.forEach(r => {
            for (let index = 0; index < r.rows.length; index++) {
                busses.push(r.rows.item(index));
            }
        });
        return busses;
    } catch (err) {
        console.error(err);
        throw Error('Failed to get bus data');
    }
};

export const addBus = async (db: SQLiteDatabase, bus: Bus) => {
    const query = `
        INSERT INTO BUS (id, name, description, spotted, dateAdded, dateSpotted)
        VALUES ('${bus.id}', '${bus.name}', '${bus.description}', ${bus.spotted}, '${bus.dateAdded}', '${bus.dateSpotted}');
    `;
    console.log(query);
    return db.executeSql(query);
};

export const updateBus = async (db: SQLiteDatabase, bus: Bus) => {
    console.log(bus.id);
    console.log(bus.name);
    const query = `
        UPDATE BUS
        SET name = '${bus.name}', description = '${bus.description}', spotted = ${bus.spotted ? 1 : 0}, dateAdded = '${bus.dateAdded}', dateSpotted = '${bus.dateSpotted}'
        WHERE id = ${bus.id};
    `;
    await db.executeSql(query);
    const res = await getBusses(db);
    console.log(res);
};

export const removeBus = async (db: SQLiteDatabase, id: number) => {
    const query = `
        DELETE FROM BUS WHERE id = ${id}
    `;
    return db.executeSql(query);
};
