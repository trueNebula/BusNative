import React, { useContext, useCallback, useEffect } from 'react';
import { Button, FlatList, SafeAreaView, StatusBar, View } from 'react-native';

import { AppContext } from '../contexts/AppContext';
import { backgroundColors, colors } from '../ui/styles/colors';
import Card from '../ui/components/Card';

function AppScreen({ navigation }: any): JSX.Element {
    const { repository, get, remove } = useContext(AppContext);

    const navigateToUpdateForId = (id: Number) => {
        navigation.navigate('Update Bus', { id });
    };

    const loadDataCallback = useCallback(async () => {
        try {
            await get();
        } catch (error) {
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    return (
        <SafeAreaView style={backgroundColors.background}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.greenAccent}
            />
            <View>
                <Button
                    title="Add Bus"
                    color={colors.greenAccent}
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
