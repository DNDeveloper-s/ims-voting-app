import React from 'react';
import ReactDOM from 'react-dom';
import MemberList from "./MemberList";
import CloseIcon from "../../icons/CloseIcon";

const AppModal = ({setShowNominee}) => {


	return ReactDOM.createPortal(
		<>
			<div className="app-backdrop" onClick={() => setShowNominee(false)} />
			<div className="app-modal">
				<div className="close-modal" onClick={() => setShowNominee(false)}>
					<CloseIcon />
				</div>
				<MemberList />
			</div>
		</>,
		document.getElementById('modal-root')
	)
}

export default AppModal;