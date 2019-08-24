import React from 'react';
import {Header, Left, Right, Body, Icon} from 'native-base';
import {Text, StyleSheet} from 'react-native';

export default class HeaderBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={styles.headerTitle} />
                </Left>
                <Body>
                    <Text style={styles.headerTitle}>{this.props.title}</Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#900C3F"
    },
    headerTitle:{
        color: "white"
    }
})