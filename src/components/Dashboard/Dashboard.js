import React from 'react';
import {useStateValue} from "../../store/StoreProvider";
import {auth} from "../../firebase";
import AppBar from "./AppBar";
import ImageCarousel from "./ImageCarousel";
import TabsHolder from "./TabsHolder";

const Dashboard = (props) => {
  const [{user}, dispatch] = useStateValue();

  const signOut = () => {
    auth.signOut().then(res => {
      console.log('[Dashboard.js || Line no. 11 ....]', res);
    })
  };

  return (
    <div className='ims_dashboard'>
      <AppBar />
      {/*<p>Signed in as {user.displayName}</p>*/}
      {/*<Button onClick={signOut} variant="outlined" color="secondary">*/}
      {/*  Sign out*/}
      {/*</Button>*/}
      <div className="ims_dashboard-content">
        <ImageCarousel />
        <TabsHolder />
      </div>
    </div>
  );
};

export default Dashboard;
