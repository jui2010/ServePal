import {SET_CLIENT_LOCATION} from '../types'

const initialState = {
    clientLocation: {}
}

export default function (state = initialState, action){
    switch(action.type){
    case SET_CLIENT_LOCATION : 
        return {
            ...state,
            clientLocation : action.payload
        }

    default : 
        return {
            ...state
        }
    }
}