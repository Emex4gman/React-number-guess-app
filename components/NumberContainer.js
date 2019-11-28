import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.NumberContainer}>
            <Text style={styles.number}>{props.children} </Text>
        </View>
    )
};
 
const styles = StyleSheet.create({
    NumberContainer: {
        borderColor: Colors.accent,
        borderWidth: 2, 
        padding: 0,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22,

    }
})
 
export default NumberContainer;