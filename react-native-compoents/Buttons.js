import {Button, Alert, StyleSheet, View} from "react-native"
import { useState } from "react"


export default function Buttons({navigation}){
    [text, setText] = useState('');
    return (        
        <Button                 
            onPress = {() => {Alert.alert("Clicked!")}}
            title = 'Click Me'                
        />        
    )
}

