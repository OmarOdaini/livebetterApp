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
              tabBarIcon: () => (
                <View>
                  <Icon style={[{color: 'white'}]} size={25} name={'stopwatch-outline'} />
                </View>
              ),
            }
          },
          Statistics: {
            screen: Stats,
            navigationOptions: {
              tabBarIcon: () => (
                <View>
                  <Icon style={[{color: 'white'}]} size={25} name={'analytics-outline'} />
                </View>
              ),
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
            }
          },
          Feedback: {
            screen: Feedback,
            navigationOptions: {
              tabBarIcon: () => (
                <View>
                  <Icon style={[{color: 'white'}]} size={25} name={'information-circle-outline'} />
                </View>
              ),
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
            }
          },
        },
        {
          initialRouteName: 'Home',
          activeColor: '#ffffff',
          inactiveColor: '#bda1f7',
          barStyle: { backgroundColor: '#6948f4' },
        }
      )





export default createAppContainer(TabNavigator)
