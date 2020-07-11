import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native'

 import Activity from './Activity'  
import Newact from './Newact'   
import InputPrompt from './InputPrompt' 

import {insertActivity, getActivities, deleteActivities} from './activitySchema'
import realm from './activitySchema'


const MainPage = () => {
  const [activities, setActivities] = useState([])


  useEffect(() => {
      reloadData()
      realm.addListener('change', () => {reloadData()})
    },[])

    const reloadData = () => {
      getActivities().then((activities) =>{
        setActivities(activities)
        
      }).catch((error) => {
        setActivities([])
        console.log(error)
      })
    }
    console.log()
    return(
        <View style={styles.mainView} >

          <View style={styles.flatList}>
              <FlatList
                data={activities}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => ( 
                  item.isDeleted == false ?     // data still exist but not rendered 
                   <View >
                       <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours}/>
                     </View>
                     : null
                )}
                numColumns={2}
              />
            </View>

            <View style={styles.addButtom} >
               <Newact activities={activities} setActivities={setActivities}/>
            </View>
        </View>
    ) 
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:"aliceblue"

    },
    flatList: {
        flex: 1
    },
    addButtom:{
      position: 'absolute',
      bottom:10,
      right:10
    }
  })
  

export default MainPage