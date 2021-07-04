import { StackActionType } from "@react-navigation/native";
import React from "react";
import { connect } from "react-redux";
import Views from "./view"

interface SplashScreen {
    token: string,
    navigation: any
}

class SplashScreen extends React.Component<SplashScreen> {
    constructor(props: any){
        super(props)
    }
    render = () => <Views/>
    componentDidMount(){
        if(this.props.token === ""){
            return setTimeout(() => {
                console.log(this.props.navigation.navigate("Login"))
            },3000)
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(SplashScreen);
