import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    
    return (
        <View style={styles.screen}>
            <Text>Game over </Text>
            <Text>Number of rounds {props.roundsNumber} </Text>
            <Text>Number was: {props.userNumber} </Text>
            <Button title='START OVER' onPress={props.startOver}/>
        </View>
    )
}

styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }
})

export default GameOverScreen;