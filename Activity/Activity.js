/*
touch overflows activityContainer into a square
*/
import React, {useState}  from 'react'
import {deleteActivity, updateRunningStatus, stopRunningActivites} from '../DBSchemas/activitySchema'
import {StyleSheet,TouchableOpacity,View,Text, Dimensions} from 'react-native'
import Stopwatch from './StopWatch'
const WindowWidth = Dimensions.get('window').width

const Activity = props => {
  const [lock, setLock] = useState(false)            //for display purpose resume vs start
  const [deleteButton, setDeleteButton] = useState(false)     

  return(
        <View style={styles.activityContainer} onTouchStart={() => setDeleteButton(false)}>   
              <View style={styles.deleteButton}>
                <TouchableOpacity style={styles.deleteTO} onPress={() => {
                    console.log('sdf')
                    deleteActivity({title: props.title, isDeleted: true, isRunning:false, seconds: props.seconds, minutes: props.minutes, hours: props.hours}
                    ).catch((error) =>{console.log(error)})
                    setDeleteButton(false)
                    }}>
                      <View style={styles.viewInDelete}>
                          <Text style={styles.textInDelete}>x</Text>
                      </View>
                    </ TouchableOpacity>
                  </View>
        
               
                <TouchableOpacity 
                style={styles.activityTO} 
                onPress={() => {
                    setLock(true)
                    if(!props.isRunning){ 
                      stopRunningActivites().then().catch((error) =>{ console.log( 'activity stopRunningActivites', error)})
                    }
                    updateRunningStatus({title: props.title, isRunning: !props.isRunning}).catch((error) =>{ console.log( 'activity updateRunningStatus', error)})
                  }
                } 
                onLongPress={() => {setDeleteButton(true)}} 
                disabled={deleteButton}>
                      <View style={styles.textView}>
                          <Text style={styles.titleStyle}>{props.title}</Text>
                          { props.isRunning ? <Text style={styles.statusStyle}>Pause</Text> : lock ? <Text style={styles.statusStyle}>Resume</Text> : <Text style={styles.statusStyle}>Start</Text>}
                          <Stopwatch title={props.title} seconds={props.seconds} minutes={props.minutes} hours={props.hours} isRunning={props.isRunning} />
                      </View>
                    </TouchableOpacity>
          </View>
    )  
}


const styles = StyleSheet.create({
  activityContainer: {
      width: WindowWidth/2.5, // parent view but still added size
      height: WindowWidth/2.5,
      borderRadius: WindowWidth/2.5/2,
      marginVertical: 20,
      marginHorizontal: 21,
    },
    activityTO: {
        width: WindowWidth/2.5,
        height: WindowWidth/2.5,
        borderRadius: WindowWidth/2.5/2,
        elevation: 15,
        backgroundColor: "#191961"
     },
     textView: {
        marginTop: 20,
        alignItems: 'center',
      },
      titleStyle:{
        color: '#C0C0C0',
        fontSize: 32,
        fontFamily: 'Roboto'
      },
      statusStyle:{
        color: '#C0C0C0',
        fontSize: 20,
        fontFamily: 'Roboto'
      },
      deleteButton: {
        width: 43,
        height: 43,
        borderRadius: 43/2,
        position: 'absolute',  // makes the button independent from others
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor:"red",
        left:125,
        top: -5,
        elevation: 17,
        zIndex: 3    // fromt of screen
    },
    deleteTO:{
      width: 43,
      height: 43,
      borderRadius: 43/2
    },
      textInDelete:{
        color: 'black',
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 1,
        marginRight: 4
      },
      viewInDelete:{
        alignItems: 'center'
      }
  })
  

export default Activity