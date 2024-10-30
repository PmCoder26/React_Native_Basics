import { StyleSheet, Text , SafeAreaView} from 'react-native';
import MyStackNavigation from './react-native-compoents/MyStackNavigation'

export default function App() {
  return (      
    <SafeAreaView style = {styles.container}>
    {/* Buttons */}
    {/* <View style={styles.buttons}>
    <Buttons />
    <Buttons />
    </View>
    <Text style={styles.text}>Hello </Text> */}

      {/* Text Inputs. */}
    {/* <TextInputs /> */}

    {/* Scrollable View */}
    {/* <ScrollableViews /> */}

    {/* List View (FlatList)*/}
    {/* <SimpleLists /> */}

    {/* Section List */}
    {/* <SectionListView /> */}

    {/* Navigation in React Native */}      
    {/* <MyStackNavigation /> */}

    <MyStackNavigation />
    

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
