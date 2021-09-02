import React from 'react';
// import { useHistory } from "react-router-dom";
import Jobs from '../Jobs/Jobs';
// import { Button } from 'react-bootstrap';

const Dashboard = () => {
  // const history = useHistory();
  // function onHandleLogout () {
  //   const cookies = document.cookie
  //   for (const cookie of cookies) {
  //     const eqPos = cookie.indexOf("=");
  //     const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  //     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  //   }
  //   console.log('document.cookie', document.cookie);
  //   history.push('/login');
  // }
  return (
    <div id="dashboard">
      {/* <Button onClick={onHandleLogout}>Logout</Button> */}
      <Jobs />
    </div>
  )
}

export default Dashboard;