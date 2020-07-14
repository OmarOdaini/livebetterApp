import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import MainPage from './MainPage'  
import Stats from './Stats'   
import Feedback from './Feedback'

    const TabNavigator = createMaterialBottomTabNavigator(
        {
          Home: {
            screen: MainPage,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'stopwatch-outline'} />),
            }
          },
          Statistics: {
            screen: Stats,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'analytics-outline'} />),
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
            }
          },
          Feedback: {
            screen: Feedback,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'information-circle-outline'} />),
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
            }
          },
        },
        {
          initialRouteName: 'Home',
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#F662DF' },
        }
      )





export default createAppContainer(TabNavigator)
