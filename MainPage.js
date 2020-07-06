import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import Activity from './Activity'  
import Newact from './Newact'   
import InputPrompt from './InputPrompt' 

const MainPage = () => {
  const [activities, setActivities] = useState( []);
    return(
        <View style={styles.mainView} >

          <View style={styles.flatList}>
              <FlatList
                data={activities}
                renderItem={({ item }) => (
                  <View >
                    <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours}/>
                    </View>
                )}
                numColumns={2}
              />
            </View>

            <View style={styles.addButtom} >
               <Newact activities={activities} setActivities={setActivities}/>
            </View>
        </View>
    ); 
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:"yellow"

    },
    flatList: {
        flex: 1
    },
    addButtom:{
      position: 'absolute',
      bottom:10,
      right:10
    }
  });
  

export default MainPage;