import {SET_AUTHENTICATED_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED,SET_TECHNICIAN } from '../types'

const initialState = {
    authenticatedUser : {
        _id:"5f2ebeb9ebd9270fe69fd85e",
        firstName:"Jui",
        lastName:"Thombre",
        profilePicture:"https://lh3.googleusercontent.com/a-/AOh14GgN7FFpwiW9NW9vvhqax-tyoBY6eVrCUI2BkU0oRr0",
        email:"jui20oct@gmail.com",
        username:"jui20oct",
    },
    technician : {},
    authenticated : false,
    loading : false
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_AUTHENTICATED :
            return {
                ...state,
                authenticated : true
            }

        case SET_UNAUTHENTICATED :
            return {
                ...state,
                authenticated : false,
                authenticatedUser : ''
            } 

        case SET_AUTHENTICATED_USER :
            return {
                ...state,
                loading : false,
                authenticatedUser : action.payload
            } 

        case SET_TECHNICIAN :
            return {
                ...state,
                technician : action.payload
            } 

        default : 
            return {
                ...state
            }
    }
} 