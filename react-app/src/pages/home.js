import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import MapSection from '../components/MapSection'

import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        padding : '20px'
    },
    mainDiv : {
        display: 'flex', 
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center'
      }
})

class home extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container style={{border: '1px solid black'}}>
                <Grid item sm={5} className ={classes.section} style={{border: '1px solid black'}}>
                    <div className={classes.mainDiv}>

                    </div>
                </Grid>
                
                <Grid item sm={7} className ={classes.section} style={{border: '1px solid black'}}>
                    <MapSection />
                </Grid>
                
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps, {})(withStyles(styles)(home))