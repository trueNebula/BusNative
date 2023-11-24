import * as React from 'react';
import { View, Text, SafeAreaView, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function AddBusScreen(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <View>
                <Text>Hello!</Text>
            </View>
        </SafeAreaView>
    );
}

AddBusScreen.options = {
    topBar: {
        title: {
            text: 'Add Bus',
        },
    },
};

export default AddBusScreen;
