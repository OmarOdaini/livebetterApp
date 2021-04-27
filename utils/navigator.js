
import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native';


import main from '../views/Main'  
import stats from '../views/Stats'   
import feedback from '../views/Feedback'

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Stats"
            tabBarPosition='bottom'
            tabBarOptions={{
                showIcon: true,
                activeTintColor: 'white',
                inactiveTintColor: '#808080',
                labelStyle: styles.iconText,
                style: styles.navigator
            }}
        >

            <Tab.Screen name="main" component={main} options={{
                showIcon: true,
                tabBarLabel: 'main',
                tabBarIcon: ({ focused }) => (<Icon style={styles.icon} name={`stopwatch${focused ? '' : '-outline'}`} />)
            }} />

            <Tab.Screen name="Stats" component={stats} options={{
                showIcon: true,
                tabBarLabel: 'Stats',
                tabBarIcon: ({ focused }) => (<Icon style={styles.icon} name={`stats-chart${focused ? '' : '-outline'}`} />)
            }} />

            <Tab.Screen name="feedback" component={feedback} options={{
                showIcon: true,
                tabBarLabel: 'feedback',
                tabBarIcon: ({ focused }) => (<Icon style={styles.icon} name={`information-circle${focused ? '' : '-outline'}`} />)
            }} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
        fontSize: 35,
        color: 'white'
    },
    iconText:{
        fontSize: 14.5,
        margin: 12,
        marginLeft: 22
    },
    navigator: {
        backgroundColor: '#383838',
        height: 80
    }
})

export default TabNavigator;
