import React, {useEffect} from 'react';
import AppBar from "./AppBar";
import ImageCarousel from "./ImageCarousel";
import TabsHolder from "./TabsHolder";

const Dashboard = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className='ims_dashboard'>
      <AppBar />
      <div className="ims_dashboard-content">
        <ImageCarousel />
        <TabsHolder />
      </div>
    </div>
  );
};

export default Dashboard;
