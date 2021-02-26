import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import TabsContent from './TabsContent';
import { makeStyles } from '@material-ui/core/styles';
import CardContainers from './CardContainers';
import { Box } from '@material-ui/core';
import ServicesList from './ServicesList';

// import LineCharts from './LineChart';
// import Deposits from './Deposits';
// import Orders from './Orders';
// import MyBarCharts from './MyBarCharts';
// import MyPieChart from './MyPieChart';

const useStyles = makeStyles((theme) => ({
    Tabroot: {
        flexGrow: 1,
        width: '95%',
        backgroundColor: theme.palette.background.default,
        // marginRight: -700
    },
    media: {
        height: 140,
    },
    TContainer: {
        display: 'flex',
    },
    mainContainer: {

        // flex: '0.6',
        // flexDirection: 'row'
    },
    sideContainer: {
        // paddingBottom: '40px',
        // flex: '0.4',
    }

}));
const Content = ({ classes }) => {
    const tab__classes = useStyles();
    const list = [
        'Box-1',
        'Box-2',
        'Box-3',
        'Box-4',
        'Box-5',
        'Box-6',

    ]
    return (
        <>

            {/* <TabsContent classes={classes} /> */}
            <div className={tab__classes.Tabroot}>
                <div>

                    <Container style={{ display: 'flex', width: '100%', overflow: 'auto', maxWidth: '600px' }} >
                        {/* {
                            list.map((val, index) => (
                                <Box
                                    boxShadow={3}
                                    bgcolor="background.paper"
                                    m={1}
                                    p={1}
                                    style={{ width: '8rem', height: '5rem' }}
                                >
                                    {val} boxShadow={3}
                                </Box>
                            ))
                        } */}
                        


                    </Container>
                </div>
                <div className={tab__classes.mainContainer}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={2}>
                            <CardContainers tab__classes={tab__classes} classes={classes} />
                        </Grid>

                    </Container>
                </div>
            </div>
        </>
    )
}

export default Content
