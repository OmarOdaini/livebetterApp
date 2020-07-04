import React from 'react';
import {
    StyleSheet,
  View,
  Text
} from 'react-native';

const Newact = (props) => {
    return(
        <View style={styles.container} >
            <View style={styles.circle} >
                    <View style={styles.center}>
                    <Text style={styles.plusSign}>+</Text>
                    </View>
            </View>
        </View>
    );
}

 

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginVertical: 5,
      marginHorizontal: 25,
      
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor:"#DEC5EA",
        borderColor: '#CD91E8',
        borderWidth: 5
     },
      center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      plusSign:{
        fontSize: 120,
        marginBottom: 15 // TEMPORARY
      }
  });
  

export default Newact;

