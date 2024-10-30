import {Text, View, StyleSheet, SectionList} from 'react-native'



export default function SectionListView(){
    const mobiles = [
        {
            title: 'Samsung',            
            data: ['S22', 'S23', 'S24']
        },
        {
            title: 'OnePlus',
            data: ['11', '11R', '12']
        },
        {
            title: 'Apple',
            data: ['iphone 14', 'iphone 15', 'iphone 16'],
        }
    ]

    return (
        <View>
        <SectionList
            sections={mobiles}
            renderSectionHeader = {({section: {title}}) => (
                <View style = {{backgroundColor: 'orange'}}>
                <Text style = {{margin: 5, fontSize: 20, color: 'white'}}>{title}</Text>
                </View>
            )}
            renderItem={({item: phone}) => (
                <View style = {{backgroundColor: 'yellow'}}>
                <Text>{phone}</Text>
                </View>
            )}
            ListHeaderComponent={(
                <View>
                    <Text style = {{fontSize: 35}}>SectionList Header</Text>
                </View>
            )}
        />
        </View>
    )
}