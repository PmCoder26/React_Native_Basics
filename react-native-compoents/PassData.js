import {View, Button, Text} from 'react-native'



export default function PassData({navigation}){

    const data = {
        name: 'Parimal',
        age: 21
    }

        
    return(
        <View>
            <Button 
                title = 'click to pass data'
                onPress = {() => {
                    navigation.navigate('DetailsScreen', {data})
                }}
            />
        </View>
    )
}


export function DetailsScreen({route}){
    const {data} = route.params
    return (
        <View>
            <Text>Name: {data.name}</Text>
            <Text>Age: {data.age} </Text>
        </View>
    )
}



