import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native'
import Buttons from './Buttons';
import ScrollableViews from './ScrollableViews';
import SectionListView from './SectionListView';
import SimpleLists from './SimpleLists';
import TextInputs from './TextInputs';
import PassData, {DetailsScreen} from './PassData';
import HooksScreen from './HooksScreen'

const Stack = createNativeStackNavigator();

export default function MyStackNavigation() {    
  return (        
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Home'        
        >
            <Stack.Screen  name = 'Home' component={HomeScreen}/>
            
            <Stack.Screen name='Buttons' component={Buttons} />

            <Stack.Screen name='ScrollabeView' component={ScrollableViews} />

            <Stack.Screen name='SectionList' component={SectionListView} />

            <Stack.Screen name='SimpleList' component={SimpleLists} />

            <Stack.Screen name='TextInputs' component={TextInputs} />

            <Stack.Screen name='PassData' component={PassData} />

            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />

            <Stack.Screen name='Hooks' component={HooksScreen} />
            
        </Stack.Navigator>
    </NavigationContainer>    
  );
}

function HomeScreen({navigation}){
    return (
        <SafeAreaView style = {{flex: 1}} >
            <Button 
                onPress = {() => navigation.navigate('Buttons')}
                title = 'Buttons'  
                style = {styles.btn}      
            />

            <Button
                onPress = {() => navigation.navigate('ScrollabeView')}
                title = 'Scrollable View'
                style = {styles.btn}      
            />

            <Button 
                onPress = {() => navigation.navigate('SectionList')}
                title = 'Section List'
                style = {styles.btn}      
            />

            <Button 
                onPress = {() => navigation.navigate('SimpleList')}
                title = 'Simple List'
                style = {styles.btn}      
            />

            <Button 
                onPress = {() => navigation.navigate('TextInputs')}
                title = 'Text Inputs'
                style = {styles.btn}      
            />

            <Button
                onPress = {() => navigation.navigate('PassData')}
                title = 'Pass Data'
                style = {styles.btn}      
            />

            <Button
                onPress = {() => navigation.navigate('Hooks')}
                title = 'Hooks'
                style = {styles.btn}      
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 30    
    }
})