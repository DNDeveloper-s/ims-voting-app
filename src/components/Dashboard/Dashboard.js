import React, {useEffect, useState} from 'react';
import AppBar from "./AppBar";
import ImageCarousel from "./ImageCarousel";
import TabsHolder from "./TabsHolder";
import AppModal from "./AppModal";
import {Button} from "@material-ui/core";
import GSheetReader from 'g-sheets-api';
import {excelKeys, memberVotes} from "../../helpers/clubData";
import useSheetsApi from "../../hooks/useSheetsApi";

const Dashboard = (props) => {
  const [showNominee, setShowNominee] = useState(false);
  const {fetchSheetData, membersVote} = useSheetsApi();


  useEffect(() => {
    fetchSheetData();
    setInterval(() => {
      fetchSheetData();
    }, 1000 * 60);
  }, []);

  return (
    <div className='ims_dashboard'>
      <AppBar />
      <div className="ims_dashboard-content">
        <ImageCarousel />
        <TabsHolder />
        {showNominee && <AppModal refreshHandle={fetchSheetData} membersVote={membersVote} setShowNominee={setShowNominee} />}
        <Button style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
          onClick={() => setShowNominee(true)}
          variant="contained"
          color="primary"
        >
          View Nominees
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
