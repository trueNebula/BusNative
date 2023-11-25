import { Bus } from './bus';

export class Repository {
    repository: Bus[] = [];

    constructor() {
        this.repository = [];
    }

    getLastId = () => {
        console.log(`Size: ${this.repository.length}`);
        let id = -1;
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
        this.repository.forEach(bus => {
            if (bus.id === id) {
                bus.name = name;
                bus.description = description;
                bus.spotted = spotted;
                bus.dateAdded = dateAdded;
                bus.dateSpotted = dateSpotted;
            }
        });
    };

    deleteBus = (id: Number) => {
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
