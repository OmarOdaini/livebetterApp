import React from 'react';
import {
    StyleSheet,
    TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Newact = (props) => {
    return(
        <View>
            <View style={styles.button} >
            <TouchableOpacity  style={styles.center} onPress= {() =>{
                <TextInput
                editable={false}
                placeholder="Please enter your text" />
            }}>
                    <Text style={styles.plusSign}>+</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

 

const styles = StyleSheet.create({
  button: {
        width: 75,
        height: 75,
        borderRadius: 75/2,
        backgroundColor:"purple",
        borderColor: 'white',
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
      }
  });
  

export default Newact;

