import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Divider, Typography } from '@material-ui/core';
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
    },
    rowHilight: {
        backgroundColor: 'lightblue',
        fontWeight: 'bolder !important'
    }
});

function bblCreateData(id, brand, status, newBBLTV, newBBLTC, topUpTV, topUpTC) {
    return { id, brand, status, newBBLTV, newBBLTC, topUpTV, topUpTC };
}

function bbcCreateData(id, stage, loanCount, loanValue, overDraftCount, overDraftValue, totaltCount, totalValue) {
    return { id, stage, loanCount, loanValue, overDraftCount, overDraftValue, totaltCount, totalValue };
}
function ucCreateData(id, stage, agriCount, agriValue, loanCount, loanValue, overDraftCount, overDraftValue, totaltCount, totalValue) {
    return { id, stage, agriCount, agriValue, loanCount, loanValue, overDraftCount, overDraftValue, totaltCount, totalValue };
}


const bblRows = [
    bblCreateData(1, 'NWB', 'APPLICATION_COMPLETE', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(2, 'NWB', 'APPLICATION_BRANDF_REQUESTED', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(3, 'NWB', 'LEGAL_DOCS_SENT', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(4, 'RBS', 'APPLICATION_COMPLETE', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(5, 'RBS', 'APPLICATION_BRANDF_REQUESTED', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(6, 'RBS', 'LEGAL_DOCS_SENT', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(7, 'UBN', 'APPLICATION_COMPLETE', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(8, 'UBN', 'APPLICATION_BRANDF_REQUESTED', 1000000000, 100000, 1000000000, 100000),
    bblCreateData(9, 'UBN', 'LEGAL_DOCS_SENT', 1000000000, 100000, 1000000000, 100000),
];

const bbcRows = [
    bbcCreateData(1, 'Assisted Drop Out - Pre-Credit Eligiblity', 1000, 10000000, 1000, 10000000, 2000, 20000000),
    bbcCreateData(2, 'Assisted Drop Out - Credit', 1000, 10000000, 1000, 10000000, 2000, 20000000),
    bbcCreateData(3, 'Assisted Drop Out - Marginal Declines', 100, 1000000, 1000, 10000000, 2000, 20000000),
    bbcCreateData(4, 'Total Assisted Drop Out Applications', 2100, 20100000, 2100, 20100000, 4200, 40200000),
    bbcCreateData(5, 'STP - Approve', 1000, 10000000, 1000, 10000000, 2000, 20000000),
    bbcCreateData(6, 'STP - Suspended Dropout', 1000, 10000000, 1000, 10000000, 2000, 20000000),
    bbcCreateData(7, 'STP - Hard Declines', 100, 1000000, 100, 1000000, 200, 2000000),
    bbcCreateData(8, 'Total Straight Through to a Final Decision', 2100, 20100000, 2100, 20100000, 4200, 40200000),
];

const ucRows = [
    ucCreateData(1, 'Hard Stops', 9, 1000, 10000000, 1000, 10000000, 2000, 20000000, 2997),
    ucCreateData(2, 'Applications Initiated (not submitted)', 9, 1000, 10000000, 1000, 10000000, 2000, 20000000, 2997),
    ucCreateData(3, `Stand Alone Call Back Request ("Customer Request Received" Call back requests as part of any other application will not be included`, 9, 100, 1000000, 1000, 10000000, 2000, 20000000, 2997),
    ucCreateData(4, 'Total ', 27, 2100, 20100000, 2100, 20100000, 4200, 40200000, 8991),
    ucCreateData(5, `Assisted Journey ("LTP Ineligible Customer")`, 9, 1000, 10000000, 1000, 10000000, 2000, 20000000, 2997),
    ucCreateData(6, `Save & Exit ("Customer Saved Partial Application")`, 9, 1000, 10000000, 1000, 10000000, 2000, 20000000, 2997),
    ucCreateData(7, 'Application Submitted ("LTP Application Received")', 9, 100, 1000000, 100, 1000000, 200, 2000000, 2997),
    ucCreateData(8, 'Referred', 9, 2100, 20100000, 2100, 20100000, 4200, 40200000, 2997),
    ucCreateData(9, 'Closed - Won', 9, 2100, 20100000, 2100, 20100000, 4200, 40200000, 2997),
    ucCreateData(10, 'Total', 45, 2100, 20100000, 2100, 20100000, 4200, 40200000, 32967),
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.type === 'light' ? '#001e6b' : teal[300],
        color: theme.palette.common.white,
        fontSize: 13,

    },
    body: {
        fontSize: 11, maxWidth: 290,

    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },

    },
}))(TableRow);

export default function SideTables({ tableName }) {
    const classes = useStyles();

    return (
        <>
            {
                tableName === 'BBLS' ?
                    <TableContainer component={Paper} style={{ overflow: 'auto', width: '650px', margin: '3px' }}>
                        <Table className={classes.table} size="small"  >
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>

                                    </StyledTableCell>
                                    <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                        NEW BBL's
                            </StyledTableCell>
                                    <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                        TOP UP's
                            </StyledTableCell>
                                </TableRow>
                                <TableRow>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }} style={{ display: 'none' }}>ID  </StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>BRAND  </StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}  >STATUS</StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>TOTAL VALUE</StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>TOTAL COUNT</StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>TOTAL VALUE</StyledTableCell>
                                    <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>TOTAL COUNT</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bblRows.map((row, index) => (
                                    <StyledTableRow key={row.id} className={row.brand === 'RBS' && classes.rowHilight}>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize: 10 }} style={{ display: 'none' }}> {row.id}</StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} >
                                            <Typography noWrap title={row.brand} component="h4" style={{ fontSize: '10px' }}>
                                                {row.brand}
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} >
                                            <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }} >
                                                {row.status}
                                            </Typography>
                                            {/* {row.status} */}
                                        </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} translate='yes' component="th" scope="row">
                                            <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }} >

                                                <EuroSymbolIcon style={{ fontSize: 10 }} /> {row.newBBLTV}
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} translate='yes' component="th" scope="row">
                                            <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>


                                                {row.newBBLTC}
                                            </Typography>

                                        </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} translate='yes' component="th" scope="row"> <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>

                                            <EuroSymbolIcon style={{ fontSize: 10}} /> {row.topUpTV}
                                        </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray' }} translate='yes' component="th" scope="row">
                                            <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                {row.topUpTC}
                                            </Typography>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </TableContainer>

                    :
                    tableName === 'BBConnect' ?

                        <TableContainer component={Paper} style={{ overflow: 'auto', width: '650px', margin: '3px' }}>
                            <Table className={classes.table} size="small"  >
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={1}>

                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={4}>
                                            RBS & NWB
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>

                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow >
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={1}>

                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                            LOAN
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                            OVERDRAFT
                                        </StyledTableCell>
                                        <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                            TOTAL
                                        </StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell style={{ border: '1px solid gray' }} style={{ display: 'none' }}>ID  </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}>STAGE  </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> COUNT </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> COUNT </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> COUNT </StyledTableCell>
                                        <StyledTableCell style={{ border: '1px solid gray', fontSize:11}}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bbcRows.map((row, index) => (
                                        <StyledTableRow key={row.id} className={row.stage.indexOf('Total') >= 0 && classes.rowHilight}>
                                            <StyledTableCell style={{ border: '1px solid gray' }} style={{ display: 'none' }}> {row.id}</StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} >
                                                <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                    {row.stage}
                                                </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                {row.loanCount }
                                            </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.loanValue}
                                            </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                {row.overDraftCount}
                                            </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.overDraftValue}
                                            </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                {row.totaltCount}
                                            </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">  <Typography noWrap title={row.stage} component="h4" style={{ fontSize: '10px' }}>
                                                <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.totalValue}
                                            </Typography>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        </TableContainer>

                        : tableName === 'UConnect' ?
                            <TableContainer component={Paper} style={{ overflow: 'auto', width: '650px', margin: '3px' }}>
                                <Table className={classes.table} size="small"  >
                                    <TableHead>
                                        <TableRow >
                                            <StyledTableCell align="center" style={{ border: '1px solid gray' , fontSize:11}} colSpan={1}>

                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray' , fontSize:11}} colSpan={6}>
                                                ULSTER
                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray' , fontSize:11}} colSpan={2}>

                                            </StyledTableCell>
                                        </TableRow>
                                        <TableRow >
                                            <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={1}>

                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11}} colSpan={2}>
                                                AGRI STOCKING
                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                                LOAN
                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray', fontSize:11 }} colSpan={2}>
                                                OVERDRAFT
                                            </StyledTableCell>
                                            <StyledTableCell align="center" style={{ border: '1px solid gray' }} colSpan={2}>

                                            </StyledTableCell>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }} style={{ display: 'none' }}>ID  </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}>STAGE  </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> COUNT </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> Number </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> Number </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> Number </StyledTableCell>
                                            <StyledTableCell style={{ border: '1px solid gray', fontSize:11 }}> <EuroSymbolIcon style={{ fontSize: 10 }} /> VALUE</StyledTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {ucRows.map((row, index) => (
                                            <StyledTableRow key={row.id} className={row.stage.indexOf('Total') >= 0 && classes.rowHilight}>
                                                <StyledTableCell style={{ border: '1px solid gray' }} style={{ display: 'none' }}> {row.id}</StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} >
                                                    <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>


                                                        {row.stage}
                                                    </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">
                                                    <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>

                                                        {row.agriCount}
                                                    </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">
                                                    <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                        <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.agriValue}
                                                    </Typography>
                                                </StyledTableCell>

                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row"><Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                    {row.loanCount}
                                                </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row"><Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.loanValue}
                                                </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">
                                                    <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}  >
                                                        {row.overDraftCount}
                                                    </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row"><Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.overDraftValue}
                                                </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row"><Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }} >
                                                    {row.totaltCount}
                                                </Typography>
                                                </StyledTableCell>
                                                <StyledTableCell style={{ border: '1px solid gray' }} align='right' translate='yes' component="th" scope="row">
                                                    <Typography noWrap title={row.status} component="h4" style={{ fontSize: '10px' }}>
                                                        <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.totalValue}
                                                    </Typography>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>

                            : <></>
            }

            {/* <br />
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
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                                
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
                             
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                               
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
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <EuroSymbolIcon style={{ fontSize: 12 }} /> {row.name}
                                </StyledTableCell >
                                <StyledTableCell align="right"><EuroSymbolIcon style={{ fontSize: 12 }} />{row.calories}</StyledTableCell >
                                 
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer> */}

        </>
    );
}