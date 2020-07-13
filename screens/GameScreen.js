import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import { Card } from '../components/Card';
import {NumberContainer} from '../components/NumberContainer';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randNumber === exclude) {
        return generateRandomNumber(min,max,exclude);
    } else {
        return randNumber;
    }
};

export const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver.bind(rounds);
        }
    }, [currentGuess, userChoice]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert(
                'Don\'t lie!', 
                'You know that this is wrong...',
                [{text: 'Sorry!', style: 'cancel'}]
                );
                return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
       const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
       setCurrentGuess(nextNumber);
       setRounds(currentRounds => currentRounds + 1);
    };
    
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:300,
        maxWidth:'80%',
    }
});