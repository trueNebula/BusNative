import React, { useContext, useState } from 'react';
import { Button, SafeAreaView, Switch, Text, TextInput } from 'react-native';

import { AppContext } from '../contexts/AppContext';
import { backgroundColors, globalStyles } from '../ui/styles/colors';

const handleOnPress = (
    callback: any,
    id: number,
    name: string,
    description: String,
    spotted: boolean,
    dateSpotted: String,
    dateAdded: String,
    navigation: any,
) => {
    console.log(`Updated id ${id}`);
    callback(id, name, description, spotted, dateAdded, dateSpotted);
    navigation.goBack();
};

function UpdateBusScreen({ route, navigation }: any): JSX.Element {
    const { repository, update } = useContext(AppContext);
    const { id } = route.params;
    const bus = repository.getById(id);
    const [name, setName] = useState(bus?.name || '');
    const [description, setDescription] = useState(bus?.description || '');
    const [spotted, setSpotted] = useState(bus?.spotted || false);
    const [dateAdded, setDateAdded] = useState(bus?.dateAdded || '01/01/1970');
    const [dateSpotted, setDateSpotted] = useState(
        bus?.dateSpotted || '27/11/2023',
    );

    return (
        <SafeAreaView style={backgroundColors.background}>
            <TextInput
                style={globalStyles.input}
                onChangeText={setName}
                value={name}
                placeholder="Bus Name..."
            />
            <TextInput
                style={globalStyles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Bus Description..."
            />
            <Text style={globalStyles.input}>Spotted?</Text>
            <Switch onValueChange={setSpotted} value={spotted} />
            <TextInput
                style={globalStyles.input}
                onChangeText={setDateSpotted}
                value={dateSpotted}
            />
            <TextInput
                style={globalStyles.input}
                onChangeText={setDateAdded}
                value={dateAdded}
            />
            <Button
                title="Update Bus"
                onPress={() =>
                    handleOnPress(
                        update,
                        id,
                        name,
                        description,
                        spotted,
                        dateAdded,
                        dateSpotted,
                        navigation,
                    )
                }
            />
        </SafeAreaView>
    );
}

export default UpdateBusScreen;
