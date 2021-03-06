import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import HomeIcon from '@material-ui/icons/Home'
import CameraIcon from '@material-ui/icons/Camera'
import Avatar from '@material-ui/core/Avatar'

import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react"

import store from '../redux/store'
import { SET_AUTHENTICATED } from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    logo : {
        marginRight: theme.spacing(2),
    },
    servePal : {
        fontFamily: 'Bebas Neue',
        fontSize : '35px',
        marginTop : '5px',
        flexGrow: 1
    },
    login: {
        fontSize : '17px',
        textTransform : 'capitalize',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    profile : {
        width: theme.spacing(4),
        height: theme.spacing(4),
        objectFit: 'cover',
        borderRadius: '50%',
    },
    profileB : {
        marginRight : '15px'
    },
    icon : {
        fontSize : '40px',
    },
    avatar: {
        fontSize : '25px',
        fontFamily: 'Bebas Neue',
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight : '15px'
    },
})


const NavBar = (props) => {

    const { classes } = props

    const {
        // user,
        // isAuthenticated,
        loginWithRedirect
    } = useAuth0();

    const isAuthenticated = true
    const user = {
        firstName:"Jui",
        lastName:"Thombre",
        picture:"https://lh3.googleusercontent.com/a-/AOh14GgN7FFpwiW9NW9vvhqax-tyoBY6eVrCUI2BkU0oRr0",
        email:"jui20oct@gmail.com",
        username:"jui20oct"
    }

    if(isAuthenticated){
        store.dispatch({type : SET_AUTHENTICATED})
    }

    return (
        <div >
            <AppBar position="relative" color="transparent" >
                <Toolbar style={{ height: 50}}>

                    {/* logog */}
                    <CameraIcon color="secondary" className={classes.icon}/>

                    {/* servePal title */}
                    <div className={classes.servePal}>
                    &nbsp;&nbsp;
                    Serve Pal &nbsp;<span style={{color: '#ffa000' , fontSize: '50px', fontFamily: 'Hind'}}>.</span>
                    </div>

                    {/* login */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Login
                        </Button>)}

                    {/* signup */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Signup
                        </Button>)}

                    {/* home */}
                    {/* {isAuthenticated && (  */}
                        <Tooltip title="Home" >
                            <Button color="primary" component = {Link} to="/home" >
                                <HomeIcon/>
                            </Button>
                        </Tooltip>
                    {/* )} */}

                    {/* profile pic */}
                    {/* {isAuthenticated && (  */}
                        <Tooltip title="Profile" >
                            {/* <Button color="primary" component = {Link} to="/profile" className={classes.profileB}  >
                                <img className={classes.profile} src={user.picture}  alt="Profile"/>
                            </Button> */}

                            <Avatar className={classes.avatar} className={classes.avatar}>JM</Avatar>
                        </Tooltip>
                    {/* )} */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default (withStyles(styles)(NavBar))