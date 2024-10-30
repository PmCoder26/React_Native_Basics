import {TextInput, StyleSheet, Text, View, Alert, Button} from 'react-native';
import { useState } from 'react';


export default function TextInputs(){
    const [name, onNameChange] = useState('')
    const [age, onAgeChange] = useState(0)    
    return (
        <View>
            <TextInput
            value={name}
            onChangeText={onNameChange}
            keyboardType='default'
            placeholder='Name'
            style={styles.textInput}
            />
            <TextInput
            value={age}
            onChangeText={onAgeChange}
            keyboardType='numeric'
            placeholder='Age'
            style={styles.textInput}
            />
            
            <Button
                title = 'Submit'
                onPress = {() => {
                    Alert.alert('Thanks for sumbitting')
                    onAgeChange(0)
                    onNameChange('')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 28,
        margin: 10,
        alignSelf: 'center'
    }
})