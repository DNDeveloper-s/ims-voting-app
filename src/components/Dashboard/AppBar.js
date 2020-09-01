import React from 'react';
import logo from '../../assets/images/logo.png';
import {Button, Drawer, SwipeableDrawer} from "@material-ui/core";
import {constants, routes} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import {Icon} from "@material-ui/core";

function AppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (e) => () => {
    setOpenDrawer(e);
  };

  return (
    <div className="navigation">
      <nav className="wrapper">
        <div className="navigation-logo">
          {window.innerWidth > constants.BREAK_POINT ?
              <img src={logo} alt="Ims Ghaziabad"/> :
              <Icon onClick={toggleDrawer(true)} color="white">menu</Icon>
          }
        </div>
        <div className="navigation-title">
          <p>Club Committee Election 2020</p>
        </div>
        {
          window.innerWidth < constants.BREAK_POINT && (
            <SwipeableDrawer swipeAreaWidth={20} anchor={'left'} open={openDrawer} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
              <div className="app-drawer-item logo">
                <img src={logo} alt=""/>
              </div>
              <NavLink className="app-drawer-item-link" to={routes.ELECTION} onClick={() => setOpenDrawer(false)}>
                <Button className="app-drawer-item active">
                  <p>Election</p>
                </Button>
              </NavLink>
              <NavLink className="app-drawer-item-link" to={routes.CLUBS} onClick={() => setOpenDrawer(false)}>
                <Button className="app-drawer-item active">
                  <p>Clubs</p>
                </Button>
              </NavLink>
              <NavLink className="app-drawer-item-link" to={routes.NOTICES} onClick={() => setOpenDrawer(false)}>
                <Button className="app-drawer-item active">
                  <p>Notices</p>
                </Button>
              </NavLink>
              <NavLink className="app-drawer-item-link" to={routes.GUIDELINES} onClick={() => setOpenDrawer(false)}>
                <Button className="app-drawer-item active">
                  <p>GuideLines</p>
                </Button>
              </NavLink>
              <NavLink className="app-drawer-item-link" to={routes.SCHEDULE} onClick={() => setOpenDrawer(false)}>
                <Button className="app-drawer-item active">
                  <p>Campaign Schedule</p>
                </Button>
              </NavLink>
            </SwipeableDrawer>
          )
        }
      </nav>
    </div>
  );
}

export default AppBar;
