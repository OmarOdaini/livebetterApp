
import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import main from '../views/Main'  
import stats from '../views/Stats'   
import feedback from '../views/Feedback'

const TabNavigator = createMaterialBottomTabNavigator({
    main: {
    screen: main,
    navigationOptions: {
        tabBarIcon: () => (<Icon style={styles.icon} name={'ios-stopwatch'} />),
        activeColor: 'white',
        inactiveColor: '#838383'
    }
    },
    statistics: {
    screen: stats,
    navigationOptions: {
        tabBarIcon: () => (<Icon style={styles.icon} name={'ios-analytics'} />),
        activeColor: 'white',
        inactiveColor: '#838383'
    }
    },
    feedback: {
    screen: feedback,
    navigationOptions: {
        tabBarIcon: () => (<Icon style={styles.icon} name={'ios-information-circle'} />),
        activeColor: 'white',
        inactiveColor: '#838383'
    }
    },
},
{
    initialRouteName: 'main',
    barStyle: { backgroundColor: '#383838' }
})

const styles = StyleSheet.create({
    icon:{
        color: 'white',
        fontSize: 27
    }
})

export default createAppContainer(TabNavigator)
