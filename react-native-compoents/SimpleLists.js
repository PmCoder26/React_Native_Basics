import {View, Text, FlatList, StyleSheet} from 'react-native'


export default function SimpleLists(){
    const companies = ['Apple', 'Samsung', 'Microsoft', 'Google', 'OnePlus']
    return (
        <View style={styles.container}>
            {/* <FlatList 
                data={companies}
                renderItem  = { ({item}) => (
                    <Text style={styles.text}>{item}</Text>
                )}                    
            /> */}

            <Text>Hello 1</Text>
            <Text>Hello 2</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'condensedBold',
        margin: 5,        
    },
    container: {
        flex: 0,
        flexDirection: 'row',     
        justifyContent: 'space-between',
        margin: '100'
    }
})