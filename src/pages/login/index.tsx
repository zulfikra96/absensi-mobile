import React,{ Component } from "react";
import { NativeBaseProvider, Box, Container } from "native-base";
import { StyleSheet } from "react-native"
import ColorSheet from "../../assets/ColorSheet";

export default class Login extends Component{
    render(){
        return(
            <NativeBaseProvider>
                <Box width="100%" style={styles.container}>
                    
                    
                </Box>
            </NativeBaseProvider>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:ColorSheet.background,
        flexDirection:'column',
        width:'100%'
    }
})