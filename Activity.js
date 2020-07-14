import React, {useState}  from 'react'
import {deleteActivity} from './activitySchema'
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native'
import Stopwatch from './StopWatch'

const Activity = props => {
  const [run, setRun] = useState(false)         //Stopwatch trigger
  const [lock, setLock] = useState(false)            //for display purpose resume vs start
  const [deleteButton, setDeleteButton] = useState(false)     

  return(
    // could also add clearing delete button to all the screen. also test onResponderMove={()=> {}}   putback }
        <View style={styles.container}>   
            {/* delete button depends on var*/}
            { deleteButton ?        
            <View style={styles.deleteButton}>
                      <TouchableOpacity onPress={() => {deleteActivity({title: props.title, isDeleted: true, seconds: props.seconds, minutes: props.minutes, hours: props.hours}).then(setDeleteButton(false)).catch((error) =>{ console.log( 'activity line 24 ', error)})}}>
                          <View style={styles.viewInDelete}>
                          <Text style={styles.textInDelete}>x</Text>
                          </View>
                        </TouchableOpacity>
                </View>
                : null }

            <View style={styles.circle} onTouchStart={() => setDeleteButton(false)}>                      
                <TouchableOpacity  style={styles.center} onPress={() => {setRun(!run), setLock(true)}} onLongPress={() => {setDeleteButton(true)}} disabled={deleteButton}>
                      <View style={styles.center} >
                          <Text style={styles.fontFormat1}>{props.title}</Text>
                          {run ? <Text style={styles.fontFormat2}>Pause</Text> : lock ? <Text style={styles.fontFormat2}>Resume</Text> : <Text style={styles.fontFormat2}>Start</Text>}
                          <Stopwatch run={run} title={props.title} seconds={props.seconds} minutes={props.minutes} hours={props.hours} />
                      </View>
                    </TouchableOpacity>
              </View>
          </View>
    )  
}


const styles = StyleSheet.create({
    container: {
      // flex:1,
      width: 150, // parent view but still added size
      height: 150,
      borderRadius: 150/2,
      marginVertical: 20,
      marginHorizontal: 28,
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        elevation: 10,
        backgroundColor:"#383838"
     },
    deleteButton: {
        // flex: 1,
        width: 43,
        height: 43,
        borderRadius: 43/2,
        position: 'absolute',  // makes the button independent from others
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor:"red",
        left:115,
        elevation: 10,
        zIndex: 2    // fromt of screen
    },
      center: {
        justifyContent: 'center',
        marginTop: 15,
        alignItems: 'center'
      },
      fontFormat1:{
        color: '#C0C0C0',
        fontSize: 32,
        fontFamily: 'Roboto'
      },
      fontFormat2:{
        color: '#C0C0C0',
        fontSize: 20,
        fontFamily: 'Roboto'
      },
      textInDelete:{
        color: 'black',
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 1
      },
      viewInDelete:{
        justifyContent: 'center',
        alignItems: 'center'
      }
  })
  

export default Activity