import React, {useEffect, useState} from "react";
import "./styles/main.scss";
import Login from "./components/Login";
import {useStateValue} from "./store/StoreProvider";
import {auth} from "./firebase";
import {actionTypes} from "./store/reducer";
import {CircularProgress} from "@material-ui/core";
import Dashboard from "./components/Dashboard/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  const [{user}, dispatch] = useStateValue();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

      setLoaded(true);
    // auth.onAuthStateChanged(authUser => {
    //   console.log('[App.js || Line no. 16 ....]', authUser);
    //
    {/*  if(!authUser) {*/}
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: null
    //     });
    //     return setLoaded(true);
    //   }
    //
    //   if(authUser.email.endsWith('@imsuc.ac.in')) {
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: authUser
    //     });
    //     return setLoaded(true);
    //   } else {
    //     // alert('Please login with the email provided by IMS Ghaziabad.');
    //   }
    //   setLoaded(true);
    // })
  }, []);

  return (
    !loaded ? (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#505050',
        position: 'fixed',
        overflow: 'hidden',
        top: 0,
        left: 0
      }}>
        <p>Hold on, while we are preparing app for you...</p>
        <CircularProgress style={{color: '#505050'}} />
      </div>
    ) : (
        <Router>
            <Switch>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
      // user ? <Dashboard /> : <Login/>
    )
  );
}

export default App;
