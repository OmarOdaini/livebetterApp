/*

*/
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Ripple from 'react-native-material-ripple'
import InputPrompt from './inputPrompt' 

const AddActivity = () => {
  const [prompt, setPrompt] = useState(false);
    return(
        <>
          <Ripple style={styles.button} rippleCentered={true} onPress={() => setPrompt(true)}>
                  <Text style={styles.plusSign}>+</Text>
            </Ripple>
            {prompt ? <InputPrompt setPrompt={setPrompt} />  : null}
        </>
    )
}
 

const styles = StyleSheet.create({
  button: {  
    flex: 1,
    width: 85,
    height: 85,
    borderRadius: 85/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#191970",
    paddingBottom: 5
  },
  plusSign:{
    fontSize: 60,
    color: 'white'
  }
  })
  

export default AddActivity

