import {SET_TECHNICIAN} from '../types'

//set selected center from the map
export const setTechnician = (technician) => (dispatch) => {
    dispatch({
        type : SET_TECHNICIAN,
        payload : technician
    })
}