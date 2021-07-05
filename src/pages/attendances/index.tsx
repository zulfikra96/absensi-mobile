import React from "react";
import { Alert, PermissionsAndroid } from "react-native";
import { connect } from "react-redux";
import Views from "./view"
import { launchCamera } from "react-native-image-picker"
import { TAKE_PHOTO } from "../../redux/reducers/attendances";
import Geolocation from '@react-native-community/geolocation';


interface AttendancesProps {
    navigation: any,
    dispatch: any,
    photo: any
}

class Attendances extends React.Component<AttendancesProps>{
    constructor(props: any){
        super(props);
    }
    render = () => <Views
        enableSent={true}
        photo={this.props.photo}
        takeAttendance={this.takeAttendance.bind(this)}
        navigation={this.props.navigation}
    />

    public async getLocation() {
        try {
            const GRANTED = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title:'Izin akses Geo Lokasi',
                    message:'Aplikasi ini meminta izin lokasi anda',
                    buttonNeutral:'Nanti aja',
                    buttonPositive:'Oke',
                    buttonNegative:'Batal'
                }
            );
        } catch (error) {
            console.error(error)
            Alert.alert("Terjadi kesalahan system")
        }
        Geolocation.setRNConfiguration({
            skipPermissionRequests:false,
            authorizationLevel:"whenInUse"
        })
        Geolocation.getCurrentPosition((info) => {
            console.log(info)
        })
    }

    public async takeAttendance(){

       launchCamera({
           mediaType:'photo'
       },(response) => {
            this.props.dispatch({
                type:TAKE_PHOTO,
                payload:response.assets[0].uri || ""
            })
       })
    }

    public sentData(){

    }
}

const mapStateToProps = (state: any) => {
    return {
        photo: state.attendances.photo
    }
}

export default connect(mapStateToProps)(Attendances)