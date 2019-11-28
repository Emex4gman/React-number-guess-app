import React ,{ useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import StartGameScreen from './screen/StartGameScreen' 
import GameScreen from './screen/GameScreen'
import GameOverScreen from './screen/GameOverScreen'
export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0)

  const configureNewGameHandler = () => {
    setGuessRound(0);  
    setUserNumber(null);
  }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numOfROunds => {
    setGuessRound(numOfROunds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRound <= 0 ) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRound>0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRound} startOver={configureNewGameHandler}/>;
  }
  
  const title = "Guess a Number"
  return (  
    <View style={styles.screen}>
      <Header title={title} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
