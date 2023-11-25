import React, { useContext, useState } from 'react';
import { Button, SafeAreaView, Switch, TextInput } from 'react-native';

import { AppContext } from '../contexts/AppContext';
import { backgroundColors } from '../ui/styles/colors';

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
    console.log(bus)
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
                onChangeText={setName}
                value={name}
                placeholder="Bus Name..."
            />
            <TextInput
                onChangeText={setDescription}
                value={description}
                placeholder="Bus Description..."
            />
            <Switch onValueChange={setSpotted} value={spotted} />
            <TextInput onChangeText={setDateSpotted} value={dateSpotted} />
            <TextInput onChangeText={setDateAdded} value={dateAdded} />
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
