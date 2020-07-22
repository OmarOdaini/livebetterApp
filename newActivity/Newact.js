/*

*/
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple'
import InputPrompt from './InputPrompt' 

const Newact = () => {
  const [prompt, setPrompt] = useState(false);
    return(
            <View style={styles.buttonView} >
                <Ripple style={styles.button} rippleCentered={true}  onPress={() => setPrompt(true)}>
                    <View style={styles.plusView}>
                        <Text style={styles.plusSign}>+</Text>
                      </View>
                  </Ripple>
                    {prompt ? <InputPrompt setPrompt={setPrompt} />  : null}
              </View>
    );
}
 

const styles = StyleSheet.create({
  buttonView:{
    width: 75,
    height: 75,
    borderRadius: 75/2,
  },
  button: {  
    flex: 1, // in order to center plusView
    width: 75,
    height: 75,
    borderRadius: 75/2,
    elevation: 5,
    backgroundColor:"#191970",
  },
  plusSign:{
    fontSize: 60,
    marginBottom: 5,
    color: 'white'
  },
  plusView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  });
  

export default Newact

