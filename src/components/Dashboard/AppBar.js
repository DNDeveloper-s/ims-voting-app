import React from 'react';
import logo from '../../assets/images/logo.png';
import {Button, SwipeableDrawer} from "@material-ui/core";
import {constants, tabs} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

function AppBar(props) {
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
            <div onClick={toggleDrawer(true)} className="material-icons">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.875C0 1.771 0.896 0.875 2 0.875H22.75C23.854 0.875 24.75 1.771 24.75 2.875C24.75 3.979 23.854 4.875 22.75 4.875H2C0.896 4.875 0 3.979 0 2.875ZM22.75 9.375H2C0.896 9.375 0 10.271 0 11.375C0 12.479 0.896 13.375 2 13.375H22.75C23.854 13.375 24.75 12.479 24.75 11.375C24.75 10.271 23.855 9.375 22.75 9.375ZM22.75 17.875H2C0.896 17.875 0 18.771 0 19.875C0 20.979 0.896 21.875 2 21.875H22.75C23.854 21.875 24.75 20.979 24.75 19.875C24.75 18.771 23.855 17.875 22.75 17.875Z" fill="black"/>
              </svg>
            </div>
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
              {tabs.map(tab => (
                <NavLink key={tab.label} className="app-drawer-item-link" to={`${props.match.url.length > 1 ? props.match.url : ''}${tab.route}`} onClick={() => setOpenDrawer(false)}>
                  <Button className="app-drawer-item active">
                    <p>{tab.label}</p>
                  </Button>
                </NavLink>
              ))}
            </SwipeableDrawer>
          )
        }
      </nav>
    </div>
  );
}

export default withRouter(AppBar);
