import { Bus } from './bus';
import {
    addBus,
    createTable,
    getBusses,
    getDBConnection,
    removeBus,
    updateBus,
} from '../util/db';
import { SQLiteDatabase } from 'react-native-sqlite-storage';

export class Repository {
    repository: Bus[] = [];
    db: SQLiteDatabase | undefined;

    constructor() {
        this.repository = [];
    }

    getFromDB = async () => {
        try {
            this.db = await getDBConnection();
            await createTable(this.db);
            const busses = await getBusses(this.db);
            console.log(busses);
            this.repository = busses;
        } catch (err) {
            console.error(err);
        }
    };

    getLastId = () => {
        console.log(`Size: ${this.repository.length}`);
        let id = 0;
        this.repository.forEach(bus => {
            id = Math.max(id, bus.id);
        });
        return id + 1;
    };

    addBusRaw = (
        name: string,
        description: string,
        spotted: boolean,
        dateAdded: string,
        dateSpotted: string,
    ) => {
        const id = this.getLastId();
        const newBus: Bus = {
            id,
            name,
            description,
            spotted,
            dateAdded,
            dateSpotted,
        };
        console.log(`Added: ${newBus}`);
        if (this.db) {
            try {
                addBus(this.db, newBus);
            } catch (err) {
                throw Error('Cannot add bus');
            }
        }
        this.repository.push(newBus);
    };

    updateBus = (
        id: number,
        name: string,
        description: string,
        spotted: boolean,
        dateAdded: string,
        dateSpotted: string,
    ) => {
        const newBus: Bus = {
            id,
            name,
            description,
            spotted,
            dateAdded,
            dateSpotted,
        };
        this.repository.forEach(bus => {
            if (bus.id === id) {
                if (this.db) {
                    try {
                        updateBus(this.db, newBus);
                    } catch (err) {
                        throw Error('Cannot update bus');
                    }
                }

                bus.name = name;
                bus.description = description;
                bus.spotted = spotted;
                bus.dateAdded = dateAdded;
                bus.dateSpotted = dateSpotted;
            }
        });
    };

    deleteBus = (id: number) => {
        if (this.db) {
            try {
                removeBus(this.db, id);
            } catch (err) {
                throw Error('Cannot remove bus');
            }
        }
        this.repository = this.repository.filter(bus => bus.id !== id);
    };

    get = () => this.repository;

    getById = (id: number) => {
        let result = {} as Bus;
        this.repository.forEach(bus => {
            if (bus.id === id) {
                result = bus;
            }
        });
        return result;
    };
}
