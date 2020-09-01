import React from 'react';

const Election = props => {

    return (
        <div className="tab-panel-container election">
            <h2 style={{marginBottom: '30px'}}>CLUB ELECTION OBJECTIVE</h2>
            <p>To assist students with similar interests and talents to become better acquainted.</p>
            <p>To provide students the opportunity to carry classroom experiences over into the co-curricular life of the campus.</p>
            <p>To give students a chance to develop social attributes.</p>
            <p>To encourage students to participate in the democratic process.</p>
            <p>To develop leadership qualities among students.</p>

            <div className="separator">
                <div className="header">
                    <p>Election Commission</p>
                </div>
                <div className="title">
                    <p>Dr. Sapna Rakesh</p>
                </div>
                <div className="title_braces">
                    <p>(Chief Election Commissioner)</p>
                </div>
                <div className="title">
                    <p>Dhruv Sharma</p>
                </div>
                <div className="title_braces">
                    <p>(Election Commissioner)</p>
                </div>
                <div className="title">
                    <p>Dr. Umesh Kumar</p>
                </div>
                <div className="title_braces">
                    <p>(Election Commissioner)</p>
                </div>
            </div>
        </div>
    )
}

export default Election;