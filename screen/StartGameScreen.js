import React from 'react';
import { View, Text, StyleSheet,  Button} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
const StartGameScreen = (props) => { 
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input}  />
                <View style={styles.bottonContainer}>
                    <View style={styles.cardBtn}>
                        <Button title='Reset' onPress={() => { }} color={Colors.accent}/>
                    </View>
                    <View style={styles.cardBtn}>
                        <Button title='Play' onPress={() => { }} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
        </View>  
    );
};

const styles = StyleSheet.create({
    screen:{
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
    }
})

export default StartGameScreen;

