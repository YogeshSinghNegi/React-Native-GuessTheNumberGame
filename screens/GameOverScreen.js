import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

export const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
                The Game is over!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});