import React, { useContext, useState } from 'react';
import {
    SafeAreaView,
    Button,
    TextInput,
    Switch,
    Text,
    View,
} from 'react-native';

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
            <View>
                <Text style={globalStyles.input}>Name</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholderTextColor={colors.textBlack}
                    onChangeText={setName}
                    value={name}
                    placeholder="Bus Name..."
                />
            </View>
            <View>
                <Text style={globalStyles.input}>Description</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholderTextColor={colors.textBlack}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Bus Description..."
                />
            </View>
            <View>
                <Text style={globalStyles.input}>Spotted?</Text>
                <Switch onValueChange={setSpotted} value={spotted} />
            </View>
            <View>
                <Text style={globalStyles.input}>Date Spotted</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={setDateSpotted}
                    value={dateSpotted}
                />
            </View>
            <View>
                <Text style={globalStyles.input}>Date Added</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={setDateAdded}
                    value={dateAdded}
                />
            </View>
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
