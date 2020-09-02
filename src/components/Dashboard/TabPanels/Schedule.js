import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {schedules} from "../../../helpers/clubData";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#253973',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


const PaddedTabRow = withStyles((theme) => ({
  root: {
    height: 40
  }
}))(TableRow);

const NoBorderTableCell = withStyles((theme) => ({
  body: {
    borderBottom: "none",
    padding: 0
  }
}))(TableCell);

const NoWrapTableCell = withStyles((theme) => ({
  body: {
    whiteSpace: 'nowrap'
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(clubs, date, time, ZoomId) {
  return { clubs, date, time, ZoomId };
}

const rows = schedules.map(schedule => createData(
  schedule.clubs.map((club, index) => (
    <PaddedTabRow key={index}>
      <NoBorderTableCell>{club}</NoBorderTableCell>
    </PaddedTabRow>
  )),
  '02.09.2020',
  '2.00pm to 4.00pm',
  <>
    <p>{schedule.zoomId[0]}</p>
    <p>{schedule.zoomId[1]}</p>
    <a href={schedule.zoomLink} style={{margin: '20px 0', display: "block", color: '#253973', fontWeight: "bold", textDecoration: 'underline'}} target="_blank">Join Debate (via Zoom)</a>
    <p style={{margin: '10px 0 5px'}}>{schedule.zoomId[2]}</p>
    <p>{schedule.zoomId[3]}</p>
  </>
));

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

function Schedule() {
  const classes = useStyles();

  return (
    <div style={{
      width: '100%',
      margin: window.innerWidth > 600 ? '50px 0' : ''
    }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Clubs</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Zoom ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {row.clubs}
                </StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <NoWrapTableCell align="center">{row.time}</NoWrapTableCell>
                <StyledTableCell align="center">{row.ZoomId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Schedule;