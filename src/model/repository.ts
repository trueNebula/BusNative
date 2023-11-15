import { Bus } from './bus';

const repository: Bus[] = [];

const getLastId = () => {
    console.log(`Size: ${repository.length}`);
    return repository.length;
};

const addBusRaw = (
    name: String,
    description: String,
    spotted: Boolean,
    dateAdded: String,
    dateSpotted: String,
) => {
    const id = getLastId();
    const newBus: Bus = {
        id,
        name,
        description,
        spotted,
        dateAdded,
        dateSpotted,
    };
    console.log(`Added: ${newBus}`);
    repository.push(newBus);
};

const updateBus = (
    id: Number,
    name: String,
    description: String,
    spotted: Boolean,
    dateAdded: String,
    dateSpotted: String,
) => {
    repository.forEach(bus => {
        if(bus.id === id) {
            bus.name = name;
            bus.description = description;
            bus.spotted = spotted;
            bus.dateAdded = dateAdded;
            bus.dateSpotted = dateSpotted;
        }
    );
}