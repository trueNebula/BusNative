/**
 * @format
 */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import AppScreen from './src/screens/AppScreen';
import AddBusScreen from './src/screens/AddBusScreen';
import UpdateBusScreen from './src/screens/UpdateBusScreen';
import { AppContextProvider } from './src/contexts/AppContext';

Navigation.registerComponent('AppScreen', () => props => (
    <AppContextProvider>
        <AppScreen {...props} />
    </AppContextProvider>
));

Navigation.registerComponent('AddBusScreen', () => props => (
    <AppContextProvider>
        <AddBusScreen {...props} />
    </AppContextProvider>
));

Navigation.registerComponent('UpdateBusScreen', () => props => (
    <AppContextProvider>
        <UpdateBusScreen {...props} />
    </AppContextProvider>
));

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a',
    },
    topBar: {
        title: {
            color: 'white',
        },
        backButton: {
            color: 'white',
        },
        background: {
            color: '#4d089a',
        },
    },
    bottomTab: {
        fontSize: 14,
        selectedFontSize: 14,
    },
});

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'AppScreen',
                        },
                    },
                ],
            },
        },
    });
});
