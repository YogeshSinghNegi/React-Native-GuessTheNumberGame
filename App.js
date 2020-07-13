/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AppHeader} from './components/AppHeader';
import { GameOverScreen } from './screens/GameOverScreen';
import { GameScreen } from './screens/GameScreen';
import {StartGameScreen} from './screens/StartGameScreen';

const App: () => React$Node = () => {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds > 0) {
    content = <GameOverScreen/>
  }

  return (
    <View style={styles.screenView}>
      <AppHeader title='Guess a Number'></AppHeader>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  }
});

export default App;

//Tutorial 
//https://www.youtube.com/watch?v=qSRrxpdMpVc