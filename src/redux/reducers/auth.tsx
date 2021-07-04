import { ENDPOINT_API } from "../../utils/helper"


export const LOGIN_POST: string = "LOGIN_POST";

export const loginPost = (email: string, password: string) => {
  (dispatch: any) => {
      fetch(`${ENDPOINT_API}/login`)
        .then((response) => response.json())
        .then((response) => {
            dispatch({
                type:LOGIN_POST,
                payload:response.data.token
            })
        })
  }
}

const initialState = {
    token:''
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_POST:
            return {
                ...state,
                token:action.payload
            }
    
        default:
            return state
    }
}

export default authReducer