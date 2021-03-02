import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '100%',
        overflow: 'auto',
        margin: '10px !important'
    },
    gridBox: {
        border: '1px solid #001e6b',
        margin: 4,
        marginRight: 0,
        width: '150px !important',
        minWidth: '100px !important',
        height: '80px !important',
        borderBottomRightRadius: '25px',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    gridBoxBlueColor: {
        backgroundColor: 'lightblue'
    },
    gridBoxGreenColor: {
        backgroundColor: 'lightgreen'
    },
    gridBoxRedColor: {
        backgroundColor: 'orangered'
    },
    title: {
        color: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        display: 'flex'
    },
    titleBar: {
        // background:
        //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }, cardDtls: {
        width: '30%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',

        transitionProperty: 'color',
        transitionDuration: '0.7s',
        transitionTimingFunction: 'ease-in',
        transitionDelay: '0.3s',
        height: '80px !important',
        margin: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: '0px',
        paddingRight: '0px', paddingTop: '0px', overflow: 'auto'
    }
}));

const tileData = [
   
    { id: 1, name: 'BBConnect', boxColor: 'gridBoxBlueColor' },
    { id: 2, name: 'UConnect', boxColor: 'gridBoxGreenColor' },
    { id: 3, name: 'BBLS', boxColor: 'gridBoxRedColor' },
    { id: 4, name: 'ELI', boxColor: 'gridBoxGreenColor' },
    { id: 5, name: 'BPM Applications', boxColor: 'gridBoxGreenColor' },
    { id: 6, name: 'Rate Manager', boxColor: 'gridBoxBlueColor' },
    { id: 7, name: 'CDS', boxColor: 'gridBoxGreenColor' },
    { id: 8, name: 'Lending BOTS', boxColor: 'gridBoxBlueColor' },
    { id: 9, name: 'Over All', boxColor: '' },

]
export default function ServicesList({ classes }) {
    debugger;
    const localClasses = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className={localClasses.root}>
            <GridList className={localClasses.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <Card  key={tile.id} className={`${localClasses.cardDtls}  ${fixedHeightPaper} ${tile.boxColor === 'gridBoxBlueColor' && localClasses.gridBoxBlueColor}
                      ${tile.boxColor === 'gridBoxGreenColor' && localClasses.gridBoxGreenColor} ${tile.boxColor === 'gridBoxRedColor' && localClasses.gridBoxRedColor}
                        `} style={{

                        }} elevation={3}>

                        <CardActions style={{
                            display: 'flex', flex: '1', flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'flex-start'
                        }}>
                            <Typography noWrap title={tile.name} component="h4" style={{ marginTop: '20px', fontSize: '14px', marginLeft: '0px' }}>
                                {tile.name}
                            </Typography>
                        </CardActions>
                    </Card>

                    // <GridListTile key={tile.id} className={`${localClasses.gridBox} ${tile.boxColor === 'gridBoxBlueColor' && classes.gridBoxBlueColor}
                    //  ${tile.boxColor === 'gridBoxGreenColor' && localClasses.gridBoxGreenColor} ${tile.boxColor === 'gridBoxRedColor' && classes.gridBoxRedColor}

                    // `} style={{

                    //     }}>

                    //     <GridListTile key={tile.img} cols={tile.cols || 1}>


                    //         <Typography noWrap title={tile.name} component="h4" style={{ marginTop: '20px', fontSize: '14px', marginLeft: '0px' }}>
                    //         {tile.name}
                    //         </Typography>
                    //     </GridListTile>

                    // </GridListTile>
                ))}
            </GridList>
        </div >
    );
}
