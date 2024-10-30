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

    // useEffect(() => {
    //     Alert.alert('Counter state changed!')
    // }, [count])         // mention the states or the variables so that the useEffect is called when they changes in the array.

    const [show, setShow] = useState(false)
    const [bTitle, setTitle] = useState('Show')

  return (
    <View style = {{
        alignSelf: 'center',
        alignItems: 'center'
    }}>
        {/* <Button
            title = 'Increment Counter'
            onPress = {() => setCount(count + 1)}
        />
        <Text>Counter: {count}</Text> */}

        <Button
            onPress = {() => {
                show == true ? setTitle('Hide') : setTitle('Show')
                setShow(!show)                
            }}
            title = {bTitle}
        />

        {
            show == true ? <ShowComponent /> : null
        }
        

    </View>
  )
}

function ShowComponent(){

    useEffect(() => {           // called when only the component ShowComponent(here) is unmounted.
        return () => Alert.alert('ShowComponent component is unmounted')
    })

    return (
        <View>
            <Text>ShowComponent</Text>
        </View>
    )
}