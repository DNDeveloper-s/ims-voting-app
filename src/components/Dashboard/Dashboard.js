import React, {useEffect, useState} from 'react';
import AppBar from "./AppBar";
import ImageCarousel from "./ImageCarousel";
import TabsHolder from "./TabsHolder";
import AppModal from "./AppModal";
import {Button} from "@material-ui/core";
import useSheetsApi from "../../hooks/useSheetsApi";

const Dashboard = () => {
  const [showNominee, setShowNominee] = useState(false);
  const {fetchSheetData, loading, membersVote} = useSheetsApi();


  useEffect(() => {
    fetchSheetData();
  }, []);

  return (
    <div className='ims_dashboard'>
      <AppBar />
      <div className="ims_dashboard-content">
        <ImageCarousel />
        <TabsHolder />
        {showNominee && <AppModal loading={loading} refreshHandle={fetchSheetData} membersVote={membersVote} setShowNominee={setShowNominee} />}
        <Button style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
          onClick={() => setShowNominee(true)}
          variant="contained"
          color="primary"
        >
          View Live Voting
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
