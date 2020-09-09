import React, {useState} from 'react';
import GSheetReader from "g-sheets-api";
import {excelKeys, memberVotes} from "../helpers/clubData";

const useSheetsApi = () => {
	const [membersVote, setMembersVote] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchSheetData = () => {
		setLoading(true);
		const options = {
			sheetId: '1BBvpZgqpNHoIzx529ufJRMPvSxt86Z5YJVFb4Lmie3w',
			sheetNumber: 1,
			returnAllResults: false,
		}
		GSheetReader(options, results => updateMembersVote((results)));
	}

	const updateMembersVote = results => {
		const initialMembersVoteList = {...memberVotes};
		results.forEach(row => {
			excelKeys.forEach(clubPost => {
				const member = row[clubPost];
				initialMembersVoteList[member] += 1;
			});
		})

		setMembersVote(initialMembersVoteList);
		setLoading(false);
	}

	return {fetchSheetData, loading, membersVote, setMembersVote};

}

export default useSheetsApi;