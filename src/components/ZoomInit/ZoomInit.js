import React, {useEffect} from 'react';
import { ZoomMtg } from "@zoomus/websdk";

import "./ZoomInit.scss";


let apiKeys = {
  apiKey: process.env.REACT_APP_ZOOM_API_KEY,
};

let meetConfig = {
  apiKey: apiKeys.apiKey,
  meetingNumber: "5447548680",
  leaveUrl: "http://localhost:3000/",
  userName: "Example",
  userEmail: "saurabh.singh@imsuc.ac.in", // must be the attendee email address
  passWord: "5ryBU4",
  role: 0,
};

const ZoomInit = (props) => {

  useEffect(() => {
    ZoomMtg.setZoomJSLib(
      "http://127.0.0.1:8080/node_modules/%40zoomus/websdk/dist/lib/",
      "/av"
    );
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();

    /**
     * You should not visible api secret key on frontend
     * Signature must be generated on server
     * https://marketplace.zoom.us/docs/sdk/native-sdks/web/essential/signature
     */
    fetch(`http://localhost:3001/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetingData: meetConfig }),
    })
      .then((result) => result.text())
      .then((response) => {
        ZoomMtg.init({
          leaveUrl: meetConfig.leaveUrl,
          isSupportAV: true,
          success: function (e) {
            console.log("Initializing Zoom init", e);
            // return;
            ZoomMtg.join({
              signature: JSON.parse(response).signature,
              apiKey: meetConfig.apiKey,
              meetingNumber: meetConfig.meetingNumber,
              userName: meetConfig.userName,
              userEmail: meetConfig.userEmail,
              passWord: meetConfig.passWord,
              error(res) {
                console.log(res);
              },
            });
          },
        });
      });
  }, []);

  return (
    <div className={}>

    </div>
  );
};

export default ZoomInit;
