import React from "react";
import { NativeBaseProvider, Box, Text, Center } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Alert, StyleSheet, TouchableHighlight } from "react-native";
import ColorSheet from "../../assets/ColorSheet";
import { connect } from "react-redux";

interface LoginState {

}

interface CardBorderProps {
    title: string,
    icon: string,
    onPress?:any
}

const CardBorder = (props: CardBorderProps) => (
    <Box style={{
        width:120,
        height:120,
        backgroundColor:'#404040',
        borderRadius:10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
       
    }}>
        <TouchableHighlight  onPress={props.onPress} underlayColor={ColorSheet.blue_color} style={{
                width:'100%',
                height:'100%',
                padding:10,
                alignItems:'center',
                flexDirection:'column',
                justifyContent:'center',
                borderRadius:10,
                
        }}>
           <Box>
                <Icon name={props.icon} style={{alignSelf:'center', color:'#fff'}} size={38} />
                <Text color="#fff">{props.title}</Text>
           </Box>
        </TouchableHighlight>
        
    </Box>
)
const Views = (props: any) => {

    return (
        <NativeBaseProvider>
            <Box flex={1} width="100%" style={[styles.container]}>
                <Box flex={1} style={[styles.container]}>
                    <Center flex={1}>
                        <Text color="#fff" fontWeight="light" fontSize="xl">Absen<Text fontWeight="bold" color="#22d3ee" fontSize="xl">Que</Text></Text>
                    </Center>
                </Box>
                <Box flex={2} style={[styles.container, { backgroundColor: ColorSheet.background_lighter }, styles.bottom_card]}>
                    <Center width="100%">
                        <Box flexDirection="row" width="80%" justifyContent="space-between" flexGrow={2} marginBottom={6}>
                            <CardBorder onPress={() => props.navigation.navigate("Attendances")} title="Absensi" icon="calendar-today"></CardBorder>
                            <CardBorder title="Profil" icon="account-circle"></CardBorder>
                        </Box>
                        <Box flexDirection="row" width="80%" justifyContent="space-between" flexGrow={2}>
                            <CardBorder title="Keluar" icon="logout"></CardBorder>
                            <CardBorder title="Status" icon="stacked-bar-chart"></CardBorder>
                        </Box>
                    </Center>
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    bottom_card: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: '10%',
        paddingHorizontal: '4%',
    },
    container: {
        flex: 1,
        backgroundColor: ColorSheet.background,
        color: ColorSheet.text_color,
        flexDirection: 'column',
        width: '100%'
    }


})

export default connect()(Views);