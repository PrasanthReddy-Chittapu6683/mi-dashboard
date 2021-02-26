

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
          <Box p={3}>
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        width: 650,
        backgroundColor: theme.palette.background.paper,
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
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}  scrollButtons="auto"  variant="scrollable">
                    <Tab label="Item One " {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container maxWidth="lg" className={classes.container} style={{ padding: '0px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6} lg={6}>
                            <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                                <SideTables />
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                                <SideTables />
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <Paper className={clsx(classes.paper, classes.fixedHeight__SideContent)}>
                                <SideTables />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
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