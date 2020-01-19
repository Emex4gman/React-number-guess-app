import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exculde) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min + " hi " + max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exculde) {
        return generateRandomBetween(min, max, exculde);
    } else {
        return rndNum
    }
};

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
            
    }, [currentGuess, userChoice, onGameOver]);

    const nextGameHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t Lie!', 'You Know taht ths is wrong ....',
                [{ text: 'Sorry', style: 'cancel' }
                ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber);
        setRounds(curRound=> curRound+1)
    };


    return (
        <View style={styles.screen}>
            <Text> Opponentts Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGameHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGameHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
});

export default GameScreen;