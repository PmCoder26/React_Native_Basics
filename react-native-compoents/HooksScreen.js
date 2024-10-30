import {View, Text, Button, Alert} from 'react-native'
import { useEffect, useState } from 'react'

export default function HooksScreen() {

    const [count, setCount] = useState(0)

    // useEffect(() => {           // used/called when there is any change in the whole state of the HooksScreen(for this) or in the state variables.
    //     Alert.alert('UI state changed')
    // })

    // useEffect(() => {           // used/called only before mounting the components, it is called only once.
    //     Alert.alert('Only before mounting components')
    // }, [])

    useEffect(() => {
        Alert.alert('Counter state changed!')
    }, [count])         // mention the states or the variables so that the useEffect is called when they changes in the array.

  return (
    <View style = {{
        alignSelf: 'center',
        alignItems: 'center'
    }}>
        <Button
            title = 'Increment Counter'
            onPress = {() => setCount(count + 1)}
        />
        <Text>Counter: {count}</Text>
    </View>
  )
}
