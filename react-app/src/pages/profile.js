import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

// import Profile from '../components/Profile'
// import ProfileSummary from '../components/ProfileSummary'
import {connect} from 'react-redux'
import {setTechnician} from '../redux/actions/userActions'
import technicianInfo from '../util/technicianInfo.json'

import MapTechnician from '../components/MapTechnician'
import Profile from '../components/Profile'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    
})

export class user extends Component {

    componentDidMount(){
        const username = this.props.match.params.username
        
        let technician = technicianInfo.filter(technician =>{
            return technician.username === username
        })
        this.props.setTechnician(technician[0])
    }

    render() {
        const { classes } = this.props
        const {technician} = this.props.user
        return (
            <Grid container spacing={5}>
                <Grid item sm={7} className ={classes.section} style={{border: '1px solid black'}}>
                    <MapTechnician />
                </Grid>

                <Grid item sm={5} className ={classes.section} style={{border: '1px solid black'}}>
                    <Profile/>
                </Grid>
                
            </Grid>
        )
  }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps , {setTechnician})(withStyles(styles)(user))