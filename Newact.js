import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import InputPrompt from './InputPrompt' 

const Newact = props => {
  const [prompt, setPrompt] = useState(false);
    return(
            <View style={styles.button} >
            <TouchableOpacity  style={styles.center} onPress={() => setPrompt(true)}>
                    <Text style={styles.plusSign}>+</Text>
                    </TouchableOpacity>
                   {prompt ? <InputPrompt setPrompt={setPrompt}  activities={props.activities} setActivities={props.setActivities}/>  : null}
            </View>
    );
}
 

const styles = StyleSheet.create({
  button: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
        backgroundColor:"blueviolet",
        borderColor: 'black',
        borderWidth: 2
     },
      center: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      plusSign:{
        fontSize: 60,
        marginBottom: 20, // TEMPORARY
        color: 'white'
      },
      Dialog:{
        flex: 1
      }
  });
  

export default Newact

