import React from 'react';
import { Repository } from '../model/repository';

const initialListState = {
    repository: new Repository(),
};

const appContextWrapper = (component?: React.Component) => ({
    ...initialListState,
    get: async () => {
        await initialListState.repository.getFromDB();
        component?.setState({ context: appContextWrapper(component) });
    },
    add: (
        name: string,
        description: string,
        spotted: boolean,
        dateAdded: string,
        dateSpotted: string,
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
        id: number,
        name: string,
        description: string,
        spotted: boolean,
        dateAdded: string,
        dateSpotted: string,
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
    remove: (id: number) => {
        initialListState.repository.deleteBus(id);
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
