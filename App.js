import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Activity from './Activity'   
import MainPage from './MainPage'   


const App: () => React$Node = () => {
  return (
  <View style={styles.body}> 
    <View style={styles.mainMenu}> 
      </View>
    <View style={styles.page}> 
          <MainPage />
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: Colors.white
  },
  mainMenu: {
    flex:1, 
    backgroundColor:"#0D0D0D"
  },
  page: {
    flex:10, 
    backgroundColor:"white"
  },
  highlight: {
    fontWeight: '700',
  }, 
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor:"red"
 },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
