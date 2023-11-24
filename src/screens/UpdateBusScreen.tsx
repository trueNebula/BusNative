import React, { useContext } from 'react';
import { View, Text, SafeAreaView, useColorScheme, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContext } from '../contexts/AppContext';

function UpdateBusScreen(): JSX.Element {
    const { count, increment, decrement } = useContext(AppContext);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <View>
                <Text>lmao!</Text>
            </View>
            <View>
                <Text>{count}</Text>
                <Button title="+" onPress={increment} />
                <Button title="-" onPress={decrement} />
            </View>
        </SafeAreaView>
    );
}

UpdateBusScreen.options = {
    topBar: {
        title: {
            text: 'Update Bus',
        },
    },
};

export default UpdateBusScreen;
