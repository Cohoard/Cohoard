import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Dashboard = () => {
    return (
      <div>
        <h1>Welcome to Cohoard!</h1>
        <div id='navigation'> Unit Navigation </div>
        <div id='unitContainer'>
          <nav>
            <Link to='/unit1'> Unit 1 </Link><br></br>
            <Link to='/unit2'> Unit 2 </Link><br></br>
            <Link to='/unit3'> Unit 3 </Link><br></br>
            <Link to='/unit4'> Unit 4 </Link><br></br>
            <Link to='/unit5'> Unit 5 </Link><br></br>
            <Link to='/unit6'> Unit 6 </Link><br></br>
          </nav>
        </div>          
      </div>
    )
  }

  export default Dashboard;