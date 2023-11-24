import React, { useContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Navigation } from 'react-native-navigation';
import { AppContext } from '../contexts/AppContext';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function AppScreen({ navigation }: any): JSX.Element {
    const { count, increment, decrement } = useContext(AppContext);
    const { list } = useContext(AppContext);
    const [refresh, setRefresh] = useState(false);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode
                            ? Colors.black
                            : Colors.white,
                    }}>
                    <Section title="LMAOOOO">
                        <Button
                            title="lmao"
                            color="#2345AA"
                            onPress={() => navigation.navigate('Add Bus')}
                        />
                        <Button
                            title="lmao 2 the sequeling"
                            color="#2345AA"
                            onPress={() => navigation.navigate('Update Bus')}
                        />
                    </Section>
                    <Section title="counter test lmao">
                        <Text>{count}</Text>
                        <Button title="+" onPress={increment} />
                        <Button title="-" onPress={decrement} />
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

// AppScreen.options = {
//     topBar: {
//         title: {
//             text: 'Home',
//         },
//     },
// };

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default AppScreen;
