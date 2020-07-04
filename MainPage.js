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

const MainPage = () => {
  const [activities, setActivities] = useState( [
    {key: 1, title: "Activity", seconds: "0", minutes: "0", hours: "0"},
    {key: 2, title: "Activ3ity", seconds: "0", minutes: "0", hours: "0"},
    {key: 3, title: "Activ3i3ty", seconds: "0", minutes: "0", hours: "0"}
  ]);
    return(
        <View style={styles.mainView} >


          <View style={styles.flatList}>
              <FlatList
                data={activities}
                renderItem={({ item }) => (
                  <View >
                    <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours} />
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
              />
            </View>


            <View style={styles.addButtom} >
               <Newact />
            </View>
        </View>
    ); 
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:"#DEC5EA"

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