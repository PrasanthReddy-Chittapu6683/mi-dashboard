import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { FaFilter } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const CardContainers = ({ classes }) => {
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightSidePaper = clsx(classes.paper, classes.fixedHeight__SideContent);
    return (
        < >

            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB -  Current Incident Stock' component="h4" style={{
                            marginTop: '10px',
                            fontSize: '12px', marginLeft: '0px'
                        }}>
                            CB -  Current Incident Stock
                                            </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                5
                                                </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB - Incident Not Asssigned' component="h4" style={{ marginTop: '10px', fontSize: '12px', marginLeft: '0px' }}>
                            CB - Incident Not Asssigned
                                            </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                5
                                                </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB - Incident Stock Excluding Child' component="h4" style={{ marginTop: '10px', fontSize: '12px', marginLeft: '0px' }}>
                            CB - Incident Stock Excluding Child
                                            </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                5
                                                </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB - Incident Not updated for 7 days' component="h4" style={{ marginTop: '10px', fontSize: '12px', marginLeft: '0px' }}>
                            CB - Incident Not updated for 7 days
                                            </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                0
                                                </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB - Incidents  > 60 Days old' component="h4" style={{ marginTop: '10px', fontSize: '12px', marginLeft: '0px' }}>
                            {'CB - Incidents  > 60 Days old'}
                        </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                <Box color='red'>
                                    0
                                </Box>
                            </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Card className={classes.root} className={fixedHeightPaper} style={{
                    paddingLeft: '0px',
                    paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
                }} elevation={3}>
                    <CardActions style={{
                        display: 'flex', flex: '1', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'flex-start'
                    }}>
                        {/* <Button size="small" color="primary">
                                                Share
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <FaFilter />
                        </IconButton>

                        <Typography noWrap title='CB - Incidents 30 > 60 days old' component="h4" style={{ marginTop: '10px', fontSize: '12px', marginLeft: '0px' }}>
                            {'CB - Incidents 30 > 60 days old'}
                        </Typography>
                        {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                        <IconButton color='primary' style={{ fontSize: '12px' }}>

                            <RefreshIcon />
                        </IconButton>
                    </CardActions>
                    <CardActionArea>

                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h4" component="h2">
                                <Box color='orange'>
                                    0
                                </Box>
                            </Typography>

                        </CardContent>
                    </CardActionArea>

                </Card>

            </Grid>
        </ >
    )
}

export default CardContainers
