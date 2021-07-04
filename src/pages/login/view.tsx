import React, { useState } from "react";
import { NativeBaseProvider, Box, Center, Input, Text, Button, FormControl } from "native-base";
import { StyleSheet,  } from "react-native";
import ColorSheet from "../../assets/ColorSheet";
import { connect } from "react-redux";

interface LoginState {
    error_message: string,
    error_email: boolean,
    error_password: boolean,
    email: string,
    password: string
}


const View = (props: any) => {

    return (
        <NativeBaseProvider>
                <Box width="100%" style={styles.container}>
                    <Center flex={1}>
                        <Box marginBottom={4}>
                            <Text color="#fff" fontWeight="light" fontSize="lg">Absen<Text fontWeight="bold" color="#22d3ee" fontSize="lg">Que</Text></Text>
                        </Box>
                        <Box width="80%" marginBottom={4}>
                            <Input
                                border={(!props.error_email) ? ColorSheet.text_color : ColorSheet.error_color}
                                keyboardType="email-address"
                                color="#fff" 
                                placeholder="Email" 
                                onChangeText={props.email} />
                        </Box>
                        <Box width="80%" marginBottom={4}>
                            <Input
                                onChangeText={props.password}
                                border={(!props.error_password) ? ColorSheet.text_color : ColorSheet.error_color}
                                placeholder="Password" 
                                color="#fff"
                                secureTextEntry={true}/>
                        </Box>
                        <Box width="80%" marginBottom={3}>
                            <Text color={ColorSheet.error_color} fontSize="sm" alignSelf="center">{props.error_message}</Text>
                        </Box>
                        <Box width="80%" flexDirection="row">
                            <Button
                                 onPress={props.onPress}
                                 flex={1}>Login</Button>
                        </Box>
                    </Center>
                </Box>
            </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorSheet.background,
        color: ColorSheet.text_color,
        flexDirection: 'column',
        width: '100%'
    }
})

export default connect()(View);