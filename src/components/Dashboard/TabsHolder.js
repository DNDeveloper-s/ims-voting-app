import React, {useState} from 'react';
import {Tab, Tabs} from "@material-ui/core";
import {Redirect, withRouter} from "react-router";
import {Route, Switch} from "react-router";
import {constants, routes, tabs} from "../../helpers/constants";
import {filterRoute} from "../../helpers/utils";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabIndexViaRoute = {
  [filterRoute(constants.HOME_ROUTE) + routes.ABOUT]: 0,
    [filterRoute(constants.HOME_ROUTE) + routes.ELECTION]: 1,
    [filterRoute(constants.HOME_ROUTE) + routes.CLUBS]: 2,
    [filterRoute(constants.HOME_ROUTE) + routes.GUIDELINES]: 3,
    [filterRoute(constants.HOME_ROUTE) + routes.SCHEDULE]: 4,
}

const TabsHolder = (props) => {
  const [value, setValue] = useState(tabIndexViaRoute[props.location.pathname] || 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeRouteTo = route => {
    console.log(props);
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
                      {tabs.map((tab, ind) => (
                        <Tab key={tab.label} onClick={() => changeRouteTo(tab.route)} label={tab.label} {...a11yProps(ind)} />
                      ))}
                    </Tabs>
                )}
            </div>
        </div>
        <div className="wrapper" style={{padding: props.location.pathname.includes('schedule') ? 0 : ''}}>
            <Switch>
              {tabs.map((tab, ind) => (
                <Route key={tab.label} path={`${props.match.url.length > 1 ? props.match.url : ''}${tab.route}`} component={tab.component} />
              ))}
              <Redirect to={`${props.match.url.length > 1 ? props.match.url : ''}${constants.FALL_BACK_ROUTE}`} />
            </Switch>
        </div>
    </>
  );
};

export default withRouter(TabsHolder);
