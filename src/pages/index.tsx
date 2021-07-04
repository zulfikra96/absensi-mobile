import React from 'react'
import { Container, Text } from "native-base";
import { connect } from 'react-redux';

class Home extends React.Component{

    render(){
        
        return(
            <Container>
                <Text>Hello world</Text>
            </Container>
        )
    }
}



export default connect()(Home);