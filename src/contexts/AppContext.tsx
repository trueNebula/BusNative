import React from 'react';
import { Repository } from '../model/repository';

const initialListState = {
    repository: new Repository(),
    count: 0,
};

const appContextWrapper = (component?: React.Component) => ({
    ...initialListState,
    add: (
        name: String,
        description: String,
        spotted: Boolean,
        dateAdded: String,
        dateSpotted: String,
    ) => {
        initialListState.repository.addBusRaw(
            name,
            description,
            spotted,
            dateAdded,
            dateSpotted,
        );
        component?.setState({ context: appContextWrapper(component) });
    },
    update: (
        id: Number,
        name: String,
        description: String,
        spotted: Boolean,
        dateAdded: String,
        dateSpotted: String,
    ) => {
        initialListState.repository.updateBus(
            id,
            name,
            description,
            spotted,
            dateAdded,
            dateSpotted,
        );
        component?.setState({ context: appContextWrapper(component) });
    },
    remove: (id: Number) => {
        initialListState.repository.deleteBus(id);
        component?.setState({ context: appContextWrapper(component) });
    },
    increment: () => {
        initialListState.count += 1;
        component?.setState({ context: appContextWrapper(component) });
    },
    decrement: () => {
        initialListState.count -= 1;
        component?.setState({ context: appContextWrapper(component) });
    },
});

type Context = ReturnType<typeof appContextWrapper>;

export const AppContext = React.createContext<Context>(appContextWrapper());

interface State {
    context: Context;
}

export class AppContextProvider extends React.Component {
    state: State = {
        context: appContextWrapper(this),
    };

    render() {
        return (
            <AppContext.Provider value={this.state.context}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
