import {SET_CLIENT_LOCATION, SET_TECHNICIAN_LATLONG} from '../types'

//set selected location from the map
export const setClientLocation = (clientLocation) => (dispatch) => {
    dispatch({
        type : SET_CLIENT_LOCATION,
        payload : clientLocation
    })
}

export const setTechnicianLatLong = (technicianLatLongObj) => (dispatch) => {
    dispatch({
        type : SET_TECHNICIAN_LATLONG,
        payload : technicianLatLongObj
    })
}