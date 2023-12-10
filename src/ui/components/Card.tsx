import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { Bus } from '../../model/bus';
import { colors, globalStyles } from '../styles/colors';

interface CardProps {
    bus: Bus;
    updateCallback: any;
    deleteCallback: any;
}

const handleUpdateOnPress = (callback: any, id: number) => {
    console.log(`switching to update screen for id ${id}`);
    callback(id);
};

const handleDeleteOnPress = (callback: any, id: number) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this Bus?', [
        {
            text: 'Cancel',
            style: 'cancel',
        },
        {
            text: 'Delete',
            style: 'destructive',
            onPress: () => callback(id),
        },
    ]);
};

function Card({ bus, updateCallback, deleteCallback }: CardProps) {
    return (
        <View>
            <View>
                <Text style={globalStyles.input}>Name: {bus.name}</Text>
                <Text style={globalStyles.input}>
                    Description: {bus.description}
                </Text>
                <Text style={globalStyles.input}>
                    {bus.spotted ? 'Spotted' : 'Not Spotted'}
                </Text>
                <Text style={globalStyles.input}>on: {bus.dateSpotted}</Text>
                <Text style={globalStyles.input}>Added: {bus.dateAdded}</Text>
            </View>
            <View>
                <Button
                    title="Update"
                    color={colors.greenAccent}
                    onPress={() => handleUpdateOnPress(updateCallback, bus.id)}
                />
                <Button
                    title="Delete"
                    color={colors.greenAccent}
                    onPress={() => handleDeleteOnPress(deleteCallback, bus.id)}
                />
            </View>
        </View>
    );
}

export default Card;
