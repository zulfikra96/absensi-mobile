import { ENDPOINT_API } from "../../utils/helper"


export const LOGIN_POST: string = "LOGIN_POST";

export const loginPost = (email: string, password: string) => {
  (dispatch) => {
      fetch(`${ENDPOINT_API}/login`)
        .then((response) => response.json())
        .then((response) => {
            dispatch({

            })
        })
  }
}

const initialState = {
    token:''
}