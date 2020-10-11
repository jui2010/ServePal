import {SET_CLIENT_LOCATION} from '../types'

//set selected center from the map
export const setClientLocation = (clientLocation) => (dispatch) => {
    dispatch({
        type : SET_CLIENT_LOCATION,
        payload : clientLocation
    })
}