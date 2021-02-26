import React, { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './Header';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Sidebar from './Sidebar';
import Content from './Content';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange,
    blue,
    teal
  } from "@material-ui/core/colors";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        paddingLeft: 15
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px 0px 16px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 35,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
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
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '93vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 150,
    },
    fixedHeight__SideContent: {
        height: 'auto',
        minHeight: '300px',
        overflow: 'auto'

    },
    fixedBarChartHeight: {
        height: 340,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
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
    contentContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    contentMainContainer: {

        flex: '0.5',

    },
    contentSideContainer: {
        flex: '0.5',
    },
    footer: {
        padding: theme.spacing(1, 1),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[600] : theme.palette.grey[500],
    },
}));

function Dashboard() {

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

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute"
                    className={clsx(classes.appBar, open && classes.appBarShift)}>

                    <Toolbar className={classes.toolbar}>
                        <div className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
                            <AssessmentIcon />
                        </div>
                        {/* <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >

                        <MenuIcon />
                    </IconButton> */}
                        <Header classes={classes} darkState={darkState} themeClickEvent={themeClickEvent} />
                    </Toolbar>
                </AppBar>
                {/* <Drawer
                variant="permanent"
                classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
                open={open}>
                <div className={classes.toolbarIcon}>
                    <AssessmentIcon style={{ justifyItems: 'flex-start' }} />
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Sidebar classes={classes} />
            </Drawer> */}
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Content classes={classes} />
                </main>
                <footer className={classes.footer}>
                    <Container maxWidth="md">
                        {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
                        {/* <Copyright /> */}
                        {/* <Typography variant="body2" > */}
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
                            {/* </Typography> */}
                        </Box>

                    </Container>
                </footer>
            </div>
        </ThemeProvider>

    )
}

export default Dashboard
