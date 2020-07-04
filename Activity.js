import React, { useState }  from 'react';
import {
    StyleSheet,
    SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Stopwatch from './StopWatch'

const Activity = (props) => {
    const [start, setStart] = useState(false);
    return(
        <View style={styles.container} >
            <View style={styles.circle} >
            <TouchableOpacity  style={styles.center}>
                    <View style={styles.center}>
                    <Text style={styles.fontFormat1}>{props.title}</Text>
                    <Text style={styles.fontFormat2}>Start</Text>
                    <Stopwatch />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

 

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginVertical: 5,
      marginHorizontal: 25,
      
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor:"#CD91E8"
     },
     stopwatch: {
        backgroundColor: 'transparent' 
     },
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      fontFormat1:{
        fontSize: 32,
        fontFamily: 'sans-serif'
      },
      fontFormat2:{
        fontSize: 20,
        fontFamily: 'sans-serif'
      }
  });
  

export default Activity;