import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {clubMembers} from "../../helpers/clubData";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
}))(TableCell);

const useStyles = makeStyles({
	table: {
		minWidth: 400,
	},
});

function MemberList({membersVote}) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} style={{marginTop: "-58px"}}>
			<Table className={[classes.table, 'members-table']} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">Member Name</StyledTableCell>
						<StyledTableCell align="left">Club Name</StyledTableCell>
						<StyledTableCell align="left">Applied Post</StyledTableCell>
						<StyledTableCell align="left">Live Count</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{clubMembers.map((row, ind) => (
						<TableRow key={ind}>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.clubName}</TableCell>
							<TableCell align="left">{row.post}</TableCell>
							<TableCell align="left">{membersVote ? membersVote[row.name] : 'Fetching'}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default MemberList;