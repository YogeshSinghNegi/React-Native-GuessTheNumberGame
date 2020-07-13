import { StyleSheet, TextInput } from 'react-native';

import React from 'react';

export const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});