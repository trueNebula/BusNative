import React, { useContext, useState } from 'react';
import { SafeAreaView, Button, TextInput, Switch, Text } from 'react-native';

import { backgroundColors, colors, globalStyles } from '../ui/styles/colors';
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
                style={globalStyles.input}
                placeholderTextColor={colors.textBlack}
                onChangeText={setName}
                value={name}
                placeholder="Bus Name..."
            />
            <TextInput
                style={globalStyles.input}
                placeholderTextColor={colors.textBlack}
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
