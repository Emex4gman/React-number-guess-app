import React ,{ useState } from 'react';
import { View, Text, StyleSheet,  Alert ,Button, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confrimed, setConfrimed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
z

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => { 
        setEnteredValue('');
        setConfrimed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{ text: 'Okey', style: "destructive", onPress: resetInputHandler}])
            return;
        }
        setConfrimed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    const cool = (selectedNumber) => {
        return (
            <Card style={styles.summaryContainer}>
                <Text>You Selected </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                
                
                <Button title='START GAME' color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)}/>
           
            </Card>
             
        )
    }
    if (confrimed) {
        confirmedOutput = cool(selectedNumber);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
 
        
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}/>
                <View style={styles.bottonContainer}>
                    <View style={styles.cardBtn}>
                            <Button title='Reset' onPress={resetInputHandler} color={Colors.accent}/>
                    </View>
                    <View style={styles.cardBtn}>
                            <Button title='Play' onPress={confirmInputHandler} color={Colors.primary}/>
                    </View>
                </View>
                </Card>
                {confirmedOutput}
            </View>  
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
       
    },
    bottonContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    cardBtn: {
        width: "40%"
    },
    input: {
        width: 50,
    },
    summaryContainer :{
        marginTop: 20,
        alignItems: 'center',
        
    }
})

export default StartGameScreen;

