import React from "react";
import { NativeBaseProvider, Box, Text, Center, Button, Image } from "native-base";
import ColorSheet from "../../assets/ColorSheet";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert } from "react-native";

const Views = ({ navigation, takeAttendance, photo, enableSent }: any) => (
    <NativeBaseProvider>
        <Box backgroundColor={ColorSheet.background} flex={1}>
            <Box flexDirection="row"  backgroundColor={ColorSheet.background_lighter} height={61}>
                <Box flex={1} flexDirection="column" height="100%" justifyContent="center">
                    <Icon onPress={() => navigation.goBack()} size={40} color="#fff" name="keyboard-arrow-left"/>
                </Box>
                <Box flex={3}   flexDirection="column" justifyContent="center">
                    <Text alignSelf="center" color="#fff" fontSize={20}>Absensi</Text>
                </Box>
                <Box flex={1}></Box>                
            </Box>
            <Box height="100%" paddingX={4}>
                <Box marginTop={8} marginBottom={8}>
                    <Box flexDirection={"row"} justifyContent={'center'} border={1} width="100%" height={80} backgroundColor={ColorSheet.background_lighter}>
                        {(photo !== "") ? <Image alt="image" size={340} source={{uri:photo}}/> : <Icon style={{alignSelf:'center'}} name="person" size={120}/>}
                    </Box>
                </Box>
                <Box marginBottom={4}>
                    <Button onPress={takeAttendance}  backgroundColor="rose.500">Ambil Photo</Button>  
                </Box>
                <Box>
                    <Button disabled={!enableSent}>Kirim</Button>
                </Box>
            </Box>
        </Box>
    </NativeBaseProvider>
);

export default Views