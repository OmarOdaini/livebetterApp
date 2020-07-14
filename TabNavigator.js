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
              activeColor: 'white',
              inactiveColor: '#C0C0C0',
            }
          },
          Feedback: {
            screen: Feedback,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'information-circle-outline'} />),
              activeColor: 'white',
              inactiveColor: '#C0C0C0',
            }
          },
        },
        {
          initialRouteName: 'Home',
          activeColor: 'white',
          inactiveColor: '#C0C0C0',
          barStyle: { backgroundColor: '#383838' },
        }
      )





export default createAppContainer(TabNavigator)
