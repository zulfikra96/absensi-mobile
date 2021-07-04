import React from "react"
import { connect } from "react-redux"
import { NativeBaseProvider, Box, Center, Text } from "native-base"
import ColorSheet from "../../assets/ColorSheet";

const Views = () => (
    <NativeBaseProvider>
        <Box flex={1} bg={ColorSheet.background}>
            <Center flex={1}>
                <Box >
                    <Text color="#fff" fontWeight="light" fontSize="xl">Absen<Text fontWeight="bold" color="#22d3ee" fontSize="xl">Que</Text></Text>
                </Box>
            </Center>
        </Box>
    </NativeBaseProvider>
);

export default connect()(Views);