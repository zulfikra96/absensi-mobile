import React from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import Views from "./view"

interface HomeInterface {
    navigation: any
}

class Home extends React.Component<HomeInterface>{
    constructor(props: any){
        super(props);
    }
    render = () => <Views
        navigation={this.props.navigation}
    />
}

const mapStateToProps = (state: any) => {
    return {

    }
}

export default connect(mapStateToProps)(Home)