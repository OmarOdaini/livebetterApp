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
    width: 85,
    height: 85,
    borderRadius: 85/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FFF5EE"
  },
  plusSign:{
    marginBottom: 20,
    marginTop: -1,
    fontSize: 69,
    color: '#191970'
  }
  })

export default AddActivity;

