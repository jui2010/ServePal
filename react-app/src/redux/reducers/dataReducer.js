import {SET_CLIENT_LOCATION, SET_TECHNICIAN_LATLONG} from '../types'

const initialState = {
    clientLocation: {},
    technicianLatLong : {}
}

export default function (state = initialState, action){
    switch(action.type){
    case SET_CLIENT_LOCATION : 
        return {
            ...state,
            clientLocation : action.payload
        }

    case SET_TECHNICIAN_LATLONG : 
        return {
            ...state,
            technicianLatLong : action.payload
        }

    default : 
        return {
            ...state
        }
    }
}