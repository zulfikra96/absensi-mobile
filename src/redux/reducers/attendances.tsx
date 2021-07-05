export const TAKE_PHOTO = "TAKE_PHOTO";

export const takePhoto = (photo: any) => {
    return {
        type:TAKE_PHOTO,
        payload:photo
    }
}

const initialState = {
    photo:'',
    lat:'',
    lng:'',
    location:'',
    datetime:''
}

const attendanceReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case TAKE_PHOTO:
            return {
                ...state,
                photo: action.payload
            }
    
        default:
            return state
    }
}

export default attendanceReducers