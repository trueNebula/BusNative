import { Bus } from './bus';

export class Repository {
    repository: Bus[] = [];

    constructor() {
        this.repository = [];
    }

    getLastId = () => {
        console.log(`Size: ${this.repository.length}`);
        return this.repository.length;
    };

    addBusRaw = (
        name: String,
        description: String,
        spotted: Boolean,
        dateAdded: String,
        dateSpotted: String,
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
        id: Number,
        name: String,
        description: String,
        spotted: Boolean,
        dateAdded: String,
        dateSpotted: String,
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
        this.repository.filter(bus => bus.id !== id);
    };
}
