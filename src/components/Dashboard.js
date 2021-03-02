import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SideTables from './SideTables';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange,
    blue,
    teal
} from "@material-ui/core/colors";
import { SpaceBar } from '@material-ui/icons';
import TabsContent from './TabsContent';
import ServicesList from './ServicesList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    fixedHeight__SideContent: {
        height: 'auto',
        minHeight: '300px',
        overflow: 'auto'

    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    fixedHeight: {
        height: 180,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(4),
    },
    hide: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(10) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },


    content: {

        // marginTop: '12vh',
        padding: theme.spacing(3),
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
        // flexDirection:''

    },
    contentItems: {
        flex: '0.5',
        // width: '50%'
    },
    sidebarItems: {
        flex: '0.5',
        // width: '50%'
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        padding: theme.spacing(0, 1),

        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },

    menuButton: {
        marginRight: 135,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginRight: '135px',
    },
    menuHeaderIcons: {

    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(150),
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: '100%'
        // width: theme.spacing(7),
        // [theme.breakpoints.up('sm')]: {
        //     width: theme.spacing(80),
        // },
    },
    footerStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
        fontSize: '1rem'
    },
    footerLinks: {
        padding: '10px',
        fontSize: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        paddingTop: '6px'
    },
    footerIcons: {
        padding: '2px',
        marginTop: '2px',
    },
    footer: {
        padding: theme.spacing(1, 1),
        marginTop: 'auto',
        position: 'sticky',
        zIndex: theme.zIndex.drawer + 1,
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[700] : teal[300],
        color: '#ffffffb3',
        fontSize: '12px',
        // theme.palette.type === 'light' ? theme.palette.grey[600] : theme.palette.grey[500],
    },
}));

function Dashboard() {
    // const fixedHeightSidePaper = clsx(classes.paper, classes.fixedHeight__SideContent);

    const [darkState, setDarkState] = React.useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? teal[400] : '#001e6b';
    // '#2a3eb1'
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
        },
    });
    const themeClickEvent = () => {
        setDarkState(!darkState);
    };


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const theme = useTheme();
    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <div className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                            <AssessmentIcon />
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Single Status Page
                            </Typography>
                        </div>
                        <div className={classes.menuHeaderIcons}>

                            <Header classes={classes} darkState={darkState} themeClickEvent={themeClickEvent} />
                        </div>

                    </Toolbar>
                </AppBar>
                <main >
                    <div style={{ marginRight: '10px', marginLeft: '10px', marginTop: '15vh' }}>
                        <ServicesList classes={classes} />
                    </div>
                    <div className={classes.content}>


                        <div className={classes.contentItems}>

                            <Content classes={classes} />

                        </div>
                        <div className={classes.sidebarItems}>

                            <Drawer
                                variant="permanent"
                                classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
                                open={open}>

                                <div className={classes.toolbar}>
                                    {open ?
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            edge="end"
                                            onClick={handleDrawerOpen}
                                            className={clsx(classes.menuButton, {
                                                [classes.hide]: open,
                                            })} >

                                            <MenuIcon />
                                        </IconButton>

                                        :

                                        <Typography component="h1" variant="h5" style={{ padding: '20px' }}
                                            color="inherit" noWrap >Volume / Throughput totals</Typography>

                                    }

                                </div>
                                <TabsContent />
                                {/* */}

                                <Divider />

                            </Drawer>

                        </div>
                    </div>
                </main>
                <footer className={classes.footer}>
                    <Container maxWidth="md">

                        <marquee behavior="scroll" direction="left">
                            <Box>
                                {'MCR0690179 - Lending - BAW upgrade v19.0.0.3  '}
                                {' '}&nbsp; &nbsp;
                        {new Date().getDate()} {'/'}
                                {new Date().getMonth()} {'/'}
                                {new Date().getFullYear()}
                                {' to '}
                                {new Date().getDate() + 3} {'/'}
                                {new Date().getMonth()} {'/'}
                                {new Date().getFullYear()}
                        &nbsp; &nbsp;
                        {' ----- '}
                        &nbsp; &nbsp;
                        {'MCR0922889 Datapower Certificate renew'}

                            </Box>
                        </marquee>

                    </Container>
                </footer>

            </div>
        </ThemeProvider >


    )
}

export default Dashboard
