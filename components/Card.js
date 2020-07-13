import {Button, StyleSheet, TextInput, View} from 'react-native';

import React from 'react';

export const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles=StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 10,
        padding:20,
        borderRadius:10,
    }
});