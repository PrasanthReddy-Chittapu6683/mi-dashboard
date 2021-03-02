

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { Divider } from '@material-ui/core';
import SideTables from './SideTables';
import CardContainers from './CardContainers';
import {
    orange,
    lightBlue,
    deepPurple,
    deepOrange,
    blue,
    green,
    grey,
    teal
} from "@material-ui/core/colors";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        // id: `scrollable-auto-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



const AntTabs = withStyles((theme) => ({
    root: {
        border: '1px solid',
        borderColor: theme.palette.type === 'light' ? theme.palette.info.dark : grey[300],
        backgroundColor: theme.palette.type === 'light' ? theme.palette.info.dark : teal[300],
        color: theme.palette.grey[200]
    },
    indicator: {
        // backgroundColor:  theme.palette.warning.dark,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.info.dark : grey[300],
        height: 5
    },
}))(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'uppercase',
        minWidth: 1,
        fontWeight: theme.typography.fontWeightRegular,
        width: '20%',
        // marginRight: theme.spacing(4),
        fontSize: 15,

        borderColor: theme.palette.primary.dark,
        borderWidth: '1px solid',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: theme.palette.type === 'light' ? theme.palette.grey[200] :'',
            opacity: 1,
        },
        '&$selected': {
            // color: '#ffff',
            // fontWeight: theme.typography.fontWeightBold,
            // backgroundColor: theme.palette.type === 'light' ? theme.palette.info.dark: teal[300],
            backgroundColor: theme.palette.background.default,
            color: theme.palette.type === 'light' ? theme.palette.grey[800] :'',
        },
        '&:focus': {
            color: theme.palette.type === 'light' ? theme.palette.grey[800] :'',
            backgroundColor: theme.palette.error
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // width: 'auto',
        backgroundColor: theme.palette.background.default,
        padding: '0px'
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    },
    demo2: {
        backgroundColor: '#2e1534',
    },
}));

export default function TabsContent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange}>
                    <AntTab label="BBLS" />
                    <AntTab label="BBConnect" />
                    <AntTab label="UConnect" />
                </AntTabs>

                <TabPanel value={value} index={0}  >
                     
                    <Container maxWidth="lg" className={classes.container}
                        style={{ padding: '0px', display: 'flex', flexWrap: 'wrap' }}>

                        <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                            <SideTables tableName={'BBLS'} />
                        </Paper>

                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                        <SideTables tableName={'BBConnect'} />
                    </Paper>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                        <SideTables tableName={'UConnect'} />
                    </Paper>
                </TabPanel>


            </div>



            {/*             
              <AppBar position="static">  
              <Tabs value={value} onChange={handleChange}

                    indicatorColor="secondary"
                    scrollButtons="auto" variant="scrollable">
                    <Tab label="BBLS" {...a11yProps(0)} />
                    <Tab label="BBConnect" {...a11yProps(1)} />
                    <Tab label="UConnect" {...a11yProps(2)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="lg" className={classes.container}
                    style={{ padding: '0px', display: 'flex', flexWrap: 'wrap' }}>
                    
                    <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                        <SideTables tableName={'BBLS'} />
                    </Paper>
                     
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                    <SideTables tableName={'BBConnect'} />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                    <SideTables tableName={'UConnect'} />
                </Paper>
            </TabPanel>   */}

        </div>
    );
}






// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// 
// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`scrollable-auto-tabpanel-${index}`}
//             aria-labelledby={`scrollable-auto-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `scrollable-force-tab-${index}`,
//         'aria-controls': `scrollable-force-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     Tabroot: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.default,
//         // marginRight: -700
//     },
//     media: {
//         height: 140,
//     },
//     TContainer: {
//         display: 'flex',
//     },
//     mainContainer: {

//         // flex: '0.6',
//         // flexDirection: 'row'
//     },
//     sideContainer: {
//         // paddingBottom: '40px',
//         // flex: '0.4',
//     }

// }));

// export default function TabsContent({ classes }) {


//     const tab__classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={tab__classes.Tabroot}>

//             <Paper>
//                 <AppBar position="static" color="default">
//                     <Tabs
//                         value={value}
//                         onChange={handleChange}
//                         variant="scrollable"
//                         scrollButtons="on"
//                         indicatorColor="primary"
//                         textColor="primary"
//                         aria-label=""
//                     >
//                         <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
//                         <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
//                         <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
//                         <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
//                         <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
//                         <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
//                         <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
//                     </Tabs>
//                 </AppBar>
//                 <TabPanel value={value} index={0}>



//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     Item Two
//             </TabPanel>
//                 <TabPanel value={value} index={2}>
//                     Item Three
//             </TabPanel>
//                 <TabPanel value={value} index={3}>
//                     Item Four
//             </TabPanel>
//                 <TabPanel value={value} index={4}>
//                     Item Five
//             </TabPanel>
//                 <TabPanel value={value} index={5}>
//                     Item Six
//             </TabPanel>
//                 <TabPanel value={value} index={6}>
//                     Item Seven
//             </TabPanel>
//             </Paper>
//         </div>
//     );
// }