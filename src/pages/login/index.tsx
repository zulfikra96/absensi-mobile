import React, { Component } from "react";
import { Alert } from "react-native";
import View from "./view"
interface LoginData {
    email?: string,
    password?: string
}

interface LoginProps { }

interface LoginState {
    error_message: string,
    error_email: boolean,
    error_password: boolean,
    email: string,
    password: string
}

export default class Login extends Component<LoginProps, LoginState>{

    public initial_state:LoginState = {
        error_message: '',
        error_email: false,
        error_password: false,
        email: '',
        password: ''
    }

    constructor(props: any) {
        super(props);
        this.state = this.initial_state
    }
    
    /**
     * 
     * @returns View
     */
    render = () => (
        <View
            email={(email: any) => this.setState({email})}
            password={(password: any) => this.setState({password})}
            error_email={this.state.error_email}
            error_password={this.state.error_password}
            error_message={this.state.error_message}
            onPress={this.postLogin.bind(this)} />
    ); 

    public validator(data: LoginData) {
        let  error_message: string = "";
        let  error_count = 0;
        if (data.email?.length === 0) {
            this.setState({ error_message: 'Email can not be null', error_email: true });
            error_count++
        }
        if (data.password?.length === 0) {
            this.setState({ error_message: "Password can not be null", error_password: true })
            error_count++
        }
        return error_count;
    }

    postLogin() {
        try {
            let error_count = this.validator({
                email: this.state.email,
                password: this.state.password
            })
            if(error_count > 0) throw {}
        } catch (error) {
            setTimeout(() => {
                this.setState(this.initial_state)
            },2000)
            return {}
        }

    }
}

