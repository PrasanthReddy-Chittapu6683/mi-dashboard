import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import {
    teal
} from "@material-ui/core/colors";
const useStyles = makeStyles({
    table: {
        minWidth: '100%',
        maxWidth: '100%',

    },
    table__cell: {
        // padding: '0px 0px 0px 10px !important'
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, };
}

const rows = [
    createData(`1,653`, 23),
    createData(237, 545),
    createData(262, 16.0),
    createData(305, 3.7),
    createData(356, 767),
];
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.type === 'light' ? '#001e6b' : teal[300],
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function SideTables() {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper} style={{ overflow: 'auto' }}>
                <Table className={classes.table} size="small"  >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" colSpan={2}>
                                NWS
                            </StyledTableCell>

                        </TableRow>
                        <TableRow>
                            <StyledTableCell>AMOUNT  </StyledTableCell>
                            <StyledTableCell align="right">COUNT</StyledTableCell>
                            {/* <StyledTableCell    align="right">Fat&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Carbs&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Protein&nbsp;(g)</StyledTableCell > */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell translate='yes' component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell>
                                {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <br />
            <Divider />
            <TableContainer component={Paper} style={{ overflow: 'hidden' }}>
                <Table className={classes.table} size="small"  >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" colSpan={2}>
                                NWS
                            </StyledTableCell>

                        </TableRow>
                        <TableRow>
                            <StyledTableCell  > AMOUNT</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            {/* <StyledTableCell    align="right">Fat&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Carbs&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Protein&nbsp;(g)</StyledTableCell > */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                                {/* <StyledTableCell  align="right">{row.fat}</StyledTableCell >
                                <StyledTableCell  align="right">{row.carbs}</StyledTableCell >
                                <StyledTableCell  align="right">{row.protein}</StyledTableCell > */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Divider />
            <br />
            <TableContainer component={Paper} style={{ overflow: 'hidden' }}>
                <Table className={classes.table} size="small"  >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" colSpan={2}>
                                NWS
                            </StyledTableCell>

                        </TableRow>
                        <TableRow>
                            <StyledTableCell  > AMOUNT</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            {/* <StyledTableCell    align="right">Fat&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Carbs&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Protein&nbsp;(g)</StyledTableCell > */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                                {/* <StyledTableCell  align="right">{row.fat}</StyledTableCell >
                                <StyledTableCell  align="right">{row.carbs}</StyledTableCell >
                                <StyledTableCell  align="right">{row.protein}</StyledTableCell > */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Divider />
            <br />
            <TableContainer component={Paper} style={{ overflow: 'hidden' }}>
                <Table className={classes.table} size="small"  >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" colSpan={2}>
                                NWS
                            </StyledTableCell>

                        </TableRow>
                        <TableRow>
                            <StyledTableCell  > AMOUNT</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            {/* <StyledTableCell    align="right">Fat&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Carbs&nbsp;(g)</StyledTableCell >
                            <StyledTableCell    align="right">Protein&nbsp;(g)</StyledTableCell > */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                                {/* <StyledTableCell  align="right">{row.fat}</StyledTableCell >
                                <StyledTableCell  align="right">{row.carbs}</StyledTableCell >
                                <StyledTableCell  align="right">{row.protein}</StyledTableCell > */}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

        </>
    );
}