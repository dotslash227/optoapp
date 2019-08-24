import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Home from '../screens/Home';
import ContactLens from '../screens/ContactLens';
import tabNavigation from  './TabNavigation';
import {View, Text, StyleSheet} from 'react-native'
import {Container, Content} from 'native-base';


class CustomDrawer extends React.Component{
    render(){
        return(
            <Container>
                <View style={styles.infoBox}>

                </View>
            </Container>
        )
    }
}


const AppStack = createDrawerNavigator({
    Home: tabNavigation,    
},{
    initialRouteName: "Home",    
    contentComponent: CustomDrawer,
    drawerWidth: 300
})

const styles = StyleSheet.create({
    infoBox:{
        height: 150,
        width: 300,
        backgroundColor: "#900C3F"
    }
})

export default AppStack;