import React from "react";
import { connect } from "react-redux";
import Views from "./view"

class Attendances extends React.Component{
    constructor(props: any){
        super(props);
    }
    render = () => <Views/>
}

const mapStateToProps = (state: any) => {
    return {

    }
}

export default connect(mapStateToProps)(Attendances)