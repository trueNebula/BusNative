import React, { useContext, useState } from 'react';
import { SafeAreaView, Button, TextInput, Switch } from 'react-native';

import { backgroundColors } from '../ui/styles/colors';
import { AppContext } from '../contexts/AppContext';

const handleOnPress = (
    callback: any,
    name: String,
    description: String,
    spotted: boolean,
    dateSpotted: String,
    dateAdded: String,
    navigation: any,
) => {
    console.log('Added');
    callback(name, description, spotted, dateAdded, dateSpotted);
    navigation.goBack();
};

function AddBusScreen({ navigation }: any): JSX.Element {
    const { add } = useContext(AppContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [spotted, setSpotted] = useState(false);
    const [dateAdded, setDateAdded] = useState('01/01/1970');
    const [dateSpotted, setDateSpotted] = useState('27/11/2023');

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
                title="Add Bus"
                onPress={() =>
                    handleOnPress(
                        add,
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

export default AddBusScreen;
