import React, { useContext } from 'react';
import { Button, FlatList, SafeAreaView, StatusBar, View } from 'react-native';

import { AppContext } from '../contexts/AppContext';
import { backgroundColors, colors } from '../ui/styles/colors';
import Card from '../ui/components/Card';

function AppScreen({ navigation }: any): JSX.Element {
    const { repository, remove } = useContext(AppContext);

    const navigateToUpdateForId = (id: Number) => {
        navigation.navigate('Update Bus', { id });
    };

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // console.log(repository.get());
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={backgroundColors.background}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.greenAccent}
            />
            <View>
                <Button
                    title="Add Bus"
                    color="#2345AA"
                    onPress={() => navigation.navigate('Add Bus')}
                />
            </View>
            <FlatList
                data={repository.get()}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        bus={item}
                        updateCallback={navigateToUpdateForId}
                        deleteCallback={remove}
                    />
                )}
            />
        </SafeAreaView>
    );
}

export default AppScreen;
