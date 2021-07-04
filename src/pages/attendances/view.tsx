import React from "react";
import { NativeBaseProvider, Box } from "native-base";

const Views = () => (
    <NativeBaseProvider>
        <Box>Hello world</Box>
    </NativeBaseProvider>
);

export default Views