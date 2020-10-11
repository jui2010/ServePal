import React, { Component, Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import LocationOnIcon from '@material-ui/icons/LocationOn'

import withStyles from '@material-ui/core/styles/withStyles'

import recommendations from '../util/recommendations.json'

import {connect} from 'react-redux'

const styles = (theme) => ({
  ...theme.spread,
  section : {
    fontFamily: 'Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif',
    fontSize: '20px'
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
                <Grid container item sm={4} >
                    <Paper elevation={3}>
                    <div className={classes.imgDiv}>
                    <Avatar >
                        {rec.firstName.toString().charAt(0)}{rec.lastName.toString().charAt(0)}
                    </Avatar>
                    </div>

                    <div className={classes.nameDiv}>
                        {rec.firstName} {rec.lastName}
                    </div>
                    <div className={classes.usernameDiv}>
                    @{rec.username}
                    </div>

                    <div className={classes.emailDiv} >
                        {rec.skill}
                    </div> 


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
                            {clientLocation.name}'s location
                        </div>
                    </Grid>

                    {/* address */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        <div className ={classes.address} >
                            <LocationOnIcon/> [{clientLocation.address}]
                        </div>
                    </Grid>

                    {/* owners name */}
                    <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        Hosted by <b>@{clientLocation.name}</b>
                    </Grid>

                    {/* availability  */}
                    {/* <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        Available from 
                        <b> {clientLocation.startTime}</b> to 
                        <b> {clientLocation.endTime}</b>
                    </Grid> */}

                    {/* price  */}
                    {/* <Grid item sm={12}  className ={classes.section} style={{border: '1px solid black'}}>
                        Rate (per hour) :
                        <b> ${clientLocation.cost}</b>
                    </Grid> */}

                    {/* book */}
                    {/* <Grid container item sm={12}  className ={classes.section} style={{border: '1px solid black'}}> */}
                        {/* <Grid container item sm={4} >
                            <Paper elevation={3}>
                            <Avatar >
                                B
                            </Avatar>
                            </Paper>
                        </Grid>
                        <Grid container item sm={4} >
                        <div className ={classes.bookslot} >
                            Book the parking spot
                        </div>
                        </Grid>
                        <Grid container item sm={4} >
                        <div className ={classes.bookslot} >
                            Book the parking spot
                        </div>
                        </Grid> */}
                    {/* </Grid> */}

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