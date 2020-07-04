import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
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
import Activity from './Activity'  
import Newact from './Newact'   

const MainPage = () => {
  const [activities, setActivities] = useState([]);
    return(
        <View style={styles.mainView} >
            <View style={styles.column}>
              <View>{activities.map((activity) => (
                      <View>{activity} </View>
              ))}</View>
            <TouchableOpacity style={styles.center} onPress= {() => setActivities({
                newState:[...activities.newState, "<Activity title='hello' />"]
              })}>
                  <Newact title="Work" />
              </TouchableOpacity>
                </View>
             <View style={styles.column}>
             
                </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:"#DEC5EA"

    },
    column: {
        flex: 5,
    },
  circle: {
      width: 200,
      height: 200,
      borderRadius: 200/2,
      backgroundColor:"red"
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    Activity:{

    }
  });
  

export default MainPage;