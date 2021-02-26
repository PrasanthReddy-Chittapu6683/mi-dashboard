import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        transitionProperty: 'color',
        transitionDuration: '0.7s',
        transitionTimingFunction: 'ease-in',
        transitionDelay: '0.3s',
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '100%'

    },
    gridBox: {
        border: '1px solid #001e6b', margin: 4,
        width: '15% !important',
        height: '100px !important',
        borderRadius: 20,
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'
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
    },
}));

const tileData = [
    { id: 1, name: 'BBConnect' },
    { id: 2, name: 'UConnect' },
    { id: 3, name: 'BBLS' },
    { id: 4, name: 'ELI' },
    { id: 5, name: 'BPM Applications' },
    { id: 6, name: 'Rate Manager' },
    { id: 7, name: 'CDS' },
    { id: 8, name: 'Lending BOTS' }

]
export default function ServicesList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.id} className={classes.gridBox} style={{
                    }}>
                        {/* <img src={tile.img} alt={tile.title} /> */}

                        <GridListTile key={tile.img} cols={tile.cols || 1} >
                            <Typography title={tile.name} color="inherit" style={{fontSize:'1rem', marginTop: 30, cursor: 'pointer' }}>
                                {tile.name}
                            </Typography>
                        </GridListTile>
                        {/* <GridListTileBar
                            title={tile.name}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}

                        /> */}

                        {/* actionIcon={
                                <IconButton aria-label={`star ${tile.name}`}>
                                    <StarBorderIcon className={classes.name} />
                                </IconButton>
                            } */}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
