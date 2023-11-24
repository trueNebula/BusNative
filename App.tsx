/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import AppScreen from './src/screens/AppScreen';
import AddBusScreen from './src/screens/AddBusScreen';
import UpdateBusScreen from './src/screens/UpdateBusScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from './src/contexts/AppContext';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
        <AppContextProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={AppScreen} />
                    <Stack.Screen name="Add Bus" component={AddBusScreen} />
                    <Stack.Screen
                        name="Update Bus"
                        component={UpdateBusScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContextProvider>
    );
}

export default App;
