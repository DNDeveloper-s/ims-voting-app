import React from 'react';
import ReactDOM from 'react-dom';
import MemberList from "./MemberList";
import CloseIcon from "../../icons/CloseIcon";
import ReloadIcon from "../../icons/ReloadIcon";
import {Button} from "@material-ui/core";

const AppModal = ({loading, membersVote, refreshHandle, setShowNominee}) => {


	return ReactDOM.createPortal(
		<>
			<div className="app-backdrop" onClick={() => setShowNominee(false)} />
			<div className="app-modal">
				<div className="close-modal" onClick={() => setShowNominee(false)}>
					<CloseIcon />
				</div>
				<div className={["refresh-modal", loading ? "loading" : ""].join(" ")}>
					<Button variant={"contained"} color="primary" onClick={refreshHandle}>
						<ReloadIcon />
					</Button>
				</div>
				<MemberList membersVote={membersVote} />
			</div>
		</>,
		document.getElementById('modal-root')
	)
}

export default AppModal;