import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import MainPage from './MainViews/MainPage'  
import Stats from './MainViews/Stats'   
import Feedback from './MainViews/Feedback'

    const TabNavigator = createMaterialBottomTabNavigator(
        {
          Home: {
            screen: MainPage,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'stopwatch-outline'} />),
              activeColor: 'white',
              inactiveColor: '#838383'
            }
          },
          Statistics: {
            screen: Stats,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'analytics-outline'} />)
            }
          },
          Feedback: {
            screen: Feedback,
            navigationOptions: {
              tabBarIcon: () => (<Icon style={[{color: 'white'}]} size={27} name={'information-circle-outline'} />),
              activeColor: 'white',
              inactiveColor: '#838383',
            }
          },
        },
        {
          initialRouteName: 'Statistics',
          activeColor: 'white',
          inactiveColor: '#838383',
          barStyle: { backgroundColor: '#383838' },
        }
      )





export default createAppContainer(TabNavigator)
