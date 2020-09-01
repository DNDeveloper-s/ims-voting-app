import React, {useState} from 'react';
import {Tab, Tabs} from "@material-ui/core";
import {Redirect, withRouter} from "react-router";
import {Route, Switch} from "react-router";
import TabPanel from "./TabPanel";
import GuideLines from "./TabPanels/GuideLines";
import {constants, routes} from "../../helpers/constants";
import Election from "./TabPanels/Election";
import Clubs from "./TabPanels/Clubs";
import Notices from "./TabPanels/Notices";
import Schedule from "./TabPanels/Schedule";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabIndexViaRoute = {
    [routes.ELECTION]: 0,
    [routes.CLUBS]: 1,
    [routes.NOTICES]: 2,
    [routes.GUIDELINES]: 3,
    [routes.SCHEDULE]: 4,
}

const TabsHolder = (props) => {
  const [value, setValue] = useState(tabIndexViaRoute[props.location.pathname] || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeRouteTo = route => {
      props.history.push(`${props.match.url.length > 1 ? props.match.url : ''}${route}`);
  }

  return (
    <>
        <div className="ims_dashboard-tabs wrapper">
            <div className="wrapper">
                {window.innerWidth > constants.BREAK_POINT && (
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <Tab onClick={() => changeRouteTo(routes.ELECTION)} label="Election" {...a11yProps(0)} />
                        <Tab onClick={() => changeRouteTo(routes.CLUBS)} label="Clubs" {...a11yProps(1)} />
                        <Tab onClick={() => changeRouteTo(routes.NOTICES)} label="Notices" {...a11yProps(2)} />
                        <Tab onClick={() => changeRouteTo(routes.GUIDELINES)} label="GuideLines" {...a11yProps(3)} />
                        <Tab onClick={() => changeRouteTo(routes.SCHEDULE)} label="Campaign Schedule" {...a11yProps(4)} />
                    </Tabs>
                )}
            </div>
        </div>
        <div className="wrapper">
            <Switch>
                <Route path={`${props.match.url.length > 1 ? props.match.url : ''}${routes.ELECTION}`} component={Election} />
                <Route path={`${props.match.url.length > 1 ? props.match.url : ''}${routes.CLUBS}`} component={Clubs} />
                <Route path={`${props.match.url.length > 1 ? props.match.url : ''}${routes.NOTICES}`} component={Notices} />
                <Route path={`${props.match.url.length > 1 ? props.match.url : ''}${routes.GUIDELINES}`} component={GuideLines} />
                <Route path={`${props.match.url.length > 1 ? props.match.url : ''}${routes.SCHEDULE}`} component={Schedule} />
                <Redirect to={`${props.match.url.length > 1 ? props.match.url : ''}${routes.ELECTION}`} />
            </Switch>
        </div>
    </>
  );
};

export default withRouter(TabsHolder);
