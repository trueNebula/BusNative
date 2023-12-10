import React, { useContext, useState } from 'react';
import {
    Button,
    SafeAreaView,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';

import { AppContext } from '../contexts/AppContext';
import { backgroundColors, colors, globalStyles } from '../ui/styles/colors';

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
