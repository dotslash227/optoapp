import React from 'react';
import {Text} from 'react-native';
import {Container, Content} from 'native-base';
import {HeaderBar} from '../components';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }    

    render(){
        return(
            <Container>
                <Content>
                    <HeaderBar {...this.props} title="Home" />
                </Content>
            </Container>
        )
    }

}

export default Home;