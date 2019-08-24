import React from 'react';
import {Container, Content} from 'native-base';
import {HeaderBar} from '../components'
import {StyleSheet, View, Text} from 'react-native';

class ContactLens extends React.Component{
    constructor(props){
        super(props);        
        this.state = {}
    }

    render(){
        return(
            <Container>
                <Content>
                    <HeaderBar title="Contact Lens" {...this.props} />
                </Content>
            </Container>
        )
    }
}

export default ContactLens