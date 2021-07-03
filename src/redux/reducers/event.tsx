import { Action, Dispatch } from "redux";

export const FETCH_EVENT: string = "FETCH_EVENT";
export const UPDATE_EVENT: string = "UPDATE_EVENT";

export const updateEvent = (event_id: any) => {
    return {
        type: UPDATE_EVENT,
        payload: event_id
    }
}

export const fetchEvent = () => {
    return (dispatch: Dispatch) => {
        fetch(`${URL}/events`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type:FETCH_EVENT,
                    payload: data
                })
            })
            .catch(err => console.log(err))
    }
}

interface ActionInterface {
    type:string,
    payload:any
}


const initialState = {
    allEvents:[],
    currentEvent: null
}

const eventsReducer = (state = initialState, action: ActionInterface) => {
    switch (action.type) {
        case "FETCH_EVENT":
            return {
                ...state,
                allEvents: action.payload
            }
        case "UPDATE_EVENT":
            return {
                ...state,
                currentEvent:action.payload
            }
        default:
            return state
    }
}

export default eventsReducer