import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation';
import {Icon} from 'native-base';
import Home from '../screens/Home';
import ContactLens from '../screens/ContactLens';
import {StyleSheet} from 'react-native';

let iconColor = "white"

const TabBarComponent = (props) => <BottomTabBar {...props} />

const tabBarOptions = {
    activeTintColor: "#DAF7A6",
    inactiveTintColor: "white"
}

const tabNavigation = createBottomTabNavigator({    
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarIcon: ()=>{
                return <Icon name="home" style={{color:iconColor}} />
            }
        }        
    },
    ContactLens: {
        screen: ContactLens,
        navigationOptions:{
            tabBarLabel: "Contact Lenses",
            tabBarIcon: ()=>{
                return <Icon name="eye" style={{color:iconColor}} />
            }
        }
    },
    News: {
        screen: Home,
        navigationOptions:{
            tabBarIcon: ()=>{
                return <Icon name="paper" style={{color:iconColor}} />
            }
        }
    },
    Location: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: "Locate Us",
            tabBarIcon: ()=>{
                return <Icon name="pin" style={{color:iconColor}} />
            }
        }
    }
},{
    tabBarComponent: props => (<TabBarComponent {...props} style={styles.tabBar} />),
    tabBarOptions: tabBarOptions
})

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: "#900C3F",        
        height: 50,
        padding: 3
    }
})

export default tabNavigation;