/*
touch overflows activityContainer into a square
*/
import React, {useState}  from 'react'
import {deleteActivity, updateRunningStatus, stopRunningActivites} from '../Schemas/activitySchema'
import {StyleSheet,TouchableOpacity,View,Text, Dimensions} from 'react-native'
import Stopwatch from './StopWatch'
const WindowWidth = Dimensions.get('window').width

const Activity = props => {
  const [lock, setLock] = useState(false)       // control status start / resume
  const [deleteButton, setDeleteButton] = useState(false)   // control delete button
  const [deleteAction, setDeleteAction] = useState(false)   // control delete button

  return(
      // main view
      <View style={styles.activityContainer}>  


          {/* delete button view  */}
          { deleteButton && <View style={styles.deleteButton}>
             <TouchableOpacity 
                style={styles.deleteTO} 
                onPress={() => { if (!deleteAction) setDeleteAction(true) }}
              >
                    <Text style={styles.textInDelete}>x</Text>
                  </ TouchableOpacity>
                </View> }


               
              {/* activity view */}
              <View>

                <TouchableOpacity 
                style={styles.activityTO} 
                pressDuration={3.0}
                onPress={() => {
                    // cancel delete button if on
                    if(deleteButton) setDeleteButton(false);
                    else{
                      setLock(true); // resume instead of start :)
                      if(!props.isRunning){
                        // force all other timers to stop when starting a timer
                        stopRunningActivites().catch((error) =>{ console.log( 'activity stopRunningActivites', error)})
                      }
                      // update status in datebase 
                      updateRunningStatus({title: props.title, isRunning: !props.isRunning}).catch((error) =>{ console.log( 'activity updateRunningStatus', error)})
                    }
                  }
                } 
                // show delete button when press and hold
                onLongPress={() => {setDeleteButton(true)}} 
                >

                <View style={styles.textView}>
                  <Text style={styles.titleStyle}>{props.title}</Text>
                  <Stopwatch title={props.title} seconds={props.seconds} minutes={props.minutes} hours={props.hours} isRunning={props.isRunning} delete={deleteAction} />            
                  { props.isRunning ? <Text style={styles.statusStyle}>Pause</Text> : lock ? <Text style={styles.statusStyle}>Resume</Text> : <Text style={styles.statusStyle}>Start</Text>}
                </View>
              </TouchableOpacity>
            </View>
      </View>
    )  
}


const styles = StyleSheet.create({
  activityContainer: {
    // flex: 1,
    width: WindowWidth/2.4, // parent view but still added size
    height: WindowWidth/2.4,
    borderRadius: WindowWidth/2.4/2,
    marginVertical: 20,
    marginHorizontal: 16
    },
  activityTO: {
    width: WindowWidth/2.4,
    height: WindowWidth/2.4,
    borderRadius: WindowWidth/2.4/2,
    elevation: 15,
    backgroundColor: "#191961"
    },
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: WindowWidth/2.4,
    height: WindowWidth/2.4,
    borderRadius: WindowWidth/2.4/2
    },
  titleStyle:{
    color: '#C0C0C0',
    fontSize: 40
    },
  statusStyle:{
    color: '#C0C0C0',
    fontSize: 20,
    marginBottom: 3
    },
  deleteButton: {
    // flex: 1,
    width: 55,
    height: 55,
    borderRadius: 55/2,
    position: 'absolute',  // makes the button independent from others
    borderColor: 'black',
    borderWidth: 6,
    backgroundColor:"red",
    left:125,
    top: -5,
    elevation: 17,
    zIndex: 3    // fromt of screen
    },
  deleteTO:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 55,
    borderRadius: 55/2,
    },
  textInDelete:{
    color: 'black',
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 2
    }
  })
  

export default Activity