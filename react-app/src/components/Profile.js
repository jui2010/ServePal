import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'

import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    currMonth : {
      textAlign : 'center',
    },
    mainDiv : {
        width: theme.spacing(15),
        paddingLeft : '37px'
    },
    imgDiv : {
        objectFit: 'cover',
        height: theme.spacing(15),
        width: theme.spacing(15),
    },
    nameDiv : {
        marginTop : '15px',
        fontSize : '25px',
        height: theme.spacing(3.5),
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
        fontFamily: 'Bebas Neue',
        letterSpacing  : '0.4px'
    },
    usernameDiv : {
        marginTop : '6px',
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(15),
        height: theme.spacing(15),
        fontSize : '50px'
    },
})

class Profile extends Component {

    render() {
        const {classes} = this.props
        const {username, firstName, lastName } = this.props.user.technician
        const fn = firstName ? firstName.toString().charAt(0) : firstName
        const ln = lastName ? lastName.toString().charAt(0) : lastName
        return (
            <div className={classes.mainDiv}>

                <div className={classes.imgDiv}>
                   <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                </div>

                <div className={classes.nameDiv}>
                    {firstName} {lastName}
                </div>

                <div className={classes.usernameDiv}>
                    @{username}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps )(withStyles(styles)(Profile))