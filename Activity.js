import React, {useState}  from 'react'
import {deleteActivity} from './activitySchema'
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native'
import Stopwatch from './StopWatch'

const Activity = props => {
  const [run, setRun] = useState(false)         //Stopwatch trigger
  const [lock, setLock] = useState(false)            //for display purpose resume vs start
  const [deleteButton, setDeleteButton] = useState(false)     

  return(
    // could also add clearing delete button to all the screen. also tesdt onResponderMove={()=> {}}   putback }
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
      marginVertical: 10,
      marginHorizontal: 28,
    },
    circle: {
        width: 140,
        height: 140,
        borderRadius: 140/2,
        elevation: 10,
        backgroundColor:"#D399EA"
     },
      center: {
        justifyContent: 'center',
        marginTop: 15,
        alignItems: 'center'
      },
      fontFormat1:{
        fontSize: 32,
        fontFamily: 'Roboto'
      },
      fontFormat2:{
        fontSize: 20,
        fontFamily: 'Roboto'
      },
      deleteButton: {
        flex: 1,
        position: 'absolute',  // makes the button independent from others
        borderColor: 'aliceblue',
        borderWidth: 3,
        backgroundColor:"red",
        left:115,
        elevation: 10,
        width: 45,
        height: 45,
        borderRadius: 45/2,
        zIndex: 2    // fromt of screen
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