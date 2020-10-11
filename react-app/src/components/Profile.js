import React, { Component , Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

import tasks from '../util/tasks.json'

import {connect} from 'react-redux'

var randomColor = require('randomcolor')

const styles = (theme) => ({
    ...theme.spread,
    mainDiv : {
        padding : '20px 10px'
    },
    imgDiv : {
        objectFit: 'cover',
    },
    nameDiv : {
        marginTop : '15px',
        fontSize : '22px',
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontWeight : 'bold',
    },
    heading : {
        fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
        fontSize : '30px',
        fontWeight : 'bold',
    },
    avatar: {
        fontFamily: 'Bebas Neue',
        width: theme.spacing(15),
        height: theme.spacing(15),
        fontSize : '50px'
    },
    taskNo: {
        paddingLeft: '13px',
        backgroundColor : 'black',
        color : 'white',
    },
    taskDesc: {
        paddingLeft: '15px',
        backgroundColor :  randomColor({luminosity: 'light'}),
    },
    gen : {
        paddingLeft: '15px',
    }
})

class Profile extends Component {

    getTaskDescription(){

        const {classes} = this.props
        const {technicianLatLong} = this.props.data
        var rows = tasks.reduce((rows, task) => {
            if (task.long === technicianLatLong.long) {
                rows.push(
                    <Grid container item >
                        <Grid item sm={1}>
                            <div className={classes.taskNo}>
                                {task.task}
                            </div>
                        </Grid>
                        <Grid item sm={11}>
                            <div className={classes.taskDesc}>
                                {task.description}
                            </div>
                        </Grid>
                        <Grid item sm={12} style={{border: '1px solid black'}}>
                            <div className={classes.gen}>
                                Client Name : {task.clientName}
                            </div>
                        </Grid>
                        <Grid item sm={12} style={{border: '1px solid black'}}>
                            <div className={classes.gen}>
                                Client Address : {task.clientAddress}
                            </div>
                        </Grid>
                        <Grid item sm={12} style={{border: '1px solid black'}} >
                            <div className={classes.gen}>
                                Skill Required : {task.skill}
                            </div>
                        </Grid>
                        <Grid item sm={12} style={{border: '1px solid black'}} >
                            <div className={classes.gen}>
                                Time Slot : {task.time}
                            </div>
                        </Grid>
                    </Grid>
                )
            } 
          return rows
        }, [])
    
        return (
          <Fragment>{rows}</Fragment>
        )
    }

    render() {
        const {classes} = this.props
        const {username, firstName, lastName, efficiency } = this.props.user.technician
        const fn = firstName ? firstName.toString().charAt(0) : firstName
        const ln = lastName ? lastName.toString().charAt(0) : lastName
        return (
            <Grid container item className={classes.mainDiv} sm={11}>

                <Grid item sm={6} className={classes.imgDiv}>
                   <Avatar className={classes.avatar}>{fn}{ln}</Avatar>
                </Grid>

                <Grid item sm={6} className={classes.nameDiv}>
                    <div>{firstName} {lastName}</div>
                    <div style={{color : '#00bcd4', fontSize: '15px'}}> @{username}</div>
                    <div style={{color : '#102027', fontSize: '15px'}}> Efficiency {efficiency}</div>
                </Grid>

                <Grid item sm={12} className={classes.nameDiv} >
                    <div className ={classes.heading} >
                        Task Schedule for the day:
                    </div>
                </Grid>

                <Grid container item sm={12} className={classes.nameDiv} >                  
                    {this.getTaskDescription()}          
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user,
    data : state.data
})

export default connect(mapStateToProps )(withStyles(styles)(Profile))