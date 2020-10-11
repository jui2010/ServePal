import React, { Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import {Link } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import withStyles from '@material-ui/core/styles/withStyles'

import recommendations from '../util/recommendations.json'

import {connect} from 'react-redux'

const styles = (theme) => ({
  ...theme.spread,
  section : {
    fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
    fontSize: '20px',
  },
  heading : {
    fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
    fontSize : '45px',
    fontWeight : 'bold',
  },
  name: {
    fontWeight : 'bold',
    fontSize : '50px'  
  },
  address: {
    fontWeight : 'bold',
    fontSize : '15px'  
  },
  bookslot: {
    fontWeight : 'bold',
    fontSize : '35px',
    marginTop : '15px'  
  },
  button : {
    fontFamily: 'Bebas Neue',
    fontSize : '30px',
    marginTop : '30px',
    marginBottom : '5px',
    color : 'black'
  },
  total : {
    fontSize : '30px',
  },
  paper : {
      padding : '20px',
      width : '120px',
      height: '160px'
  },
  rec : {
      marginTop : '30px'
  },
  nameDiv:{
      fontWeight: 'bold'
  },
  wip : {
    fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
    fontSize : '15px',
    fontWeight : 'bold',
    backgroundColor: '#80e27e'
  }
})

export class Recommendations extends Component {

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    showRecommendations(){
        const {classes} = this.props
        const {clientLocation} = this.props.data
        var rows = recommendations.reduce((rows, rec) => {
            if (rec.clientName === clientLocation.name) {
                rows.push(
                    <Grid container item sm={4} className={classes.rec} >
                        <Paper elevation={3} className={classes.paper} >
                        <div className={classes.imgDiv}>
                        <Avatar >
                            {rec.firstName.toString().charAt(0)}{rec.lastName.toString().charAt(0)}
                        </Avatar>
                        </div>

                        <div className={classes.nameDiv}>
                            {rec.firstName} {rec.lastName}
                        </div>
                        <div className={classes.usernameDiv}>
                            <MuiLink component ={Link} to ={ `/${rec.username}`} className={classes.username} >
                                @{rec.username} 
                            </MuiLink>
                        </div>

                        <div >
                            {rec.skill}
                        </div> 

                        {rec.served &&
                        <div className={classes.wip} >
                            <div style={{fontSize : '12px', padding : '5px', marginTop : '20px'}}>
                                Work in progress
                            </div>
                        </div> 
                        }

                        </Paper>
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
        const { classes } = this.props
        const {clientLocation} = this.props.data
        return (
            <Grid container item alignItems="center" justify="center">
                
                {Object.keys(clientLocation).length === 0 &&
                    <Grid item sm={12} className ={classes.section} >
                        <div className ={classes.heading} >
                            Choose a client location
                        </div>
                    </Grid>
                }

                {Object.keys(clientLocation).length > 0 &&
                <Fragment >
                    
                    {/* name */}
                    <Grid item sm={12} className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.name} >
                            Client Name: {clientLocation.name}
                        </div>
                    </Grid>

                    {/* address */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.address} >
                            <LocationOnIcon/> [{clientLocation.address}]
                        </div>
                    </Grid>

                    {/* address */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.address} >
                            Time : {clientLocation.time}
                        </div>
                    </Grid>

                    {/* address */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.address} >
                            Skill Required : {clientLocation.skill}
                        </div>
                    </Grid>

                    {/* showing technician info */}
                    {this.showRecommendations()}
                </Fragment>
                  
                }         
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
  data : state.data
})

export default connect(mapStateToProps )(withStyles(styles)(Recommendations))