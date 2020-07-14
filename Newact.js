import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple'
import InputPrompt from './InputPrompt' 

const Newact = props => {
  const [prompt, setPrompt] = useState(false);
    return(
            <View style={styles.buttonView} >
            <Ripple style={styles.button} rippleCentered={true}  onPress={() => setPrompt(true)}>
                    <View style={styles.plusView}><Text style={styles.plusSign}>+</Text></View>
                    </Ripple>
                   {prompt ? <InputPrompt setPrompt={setPrompt}  activities={props.activities} setActivities={props.setActivities}/>  : null}
            </View>
    );
}
 

const styles = StyleSheet.create({
  buttonView:{
    marginRight: 10,
    marginBottom: 7,
    width: 75,
    height: 75,
    borderRadius: 75/2,
    elevation: 5,
    backgroundColor:"#F662DF"
  },
  button: {  
    width: 75,
    height: 75,
    borderRadius: 75/2,
    elevation: 5,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1  //IOS
     },
      plusSign:{
        fontSize: 60,
        marginBottom: 20, // TEMPORARY
        color: 'white'
      },
      plusView:{
        justifyContent: 'center',
        alignItems: 'center'
      }
  });
  

export default Newact

