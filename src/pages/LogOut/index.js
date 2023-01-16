import React from 'react';
import { Link } from 'react-router-dom';
import './logout.css';

export const LogOut = () => {
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"800px", flexDirection:"column" }}>
           
            <p style={{textAlign:"center"}}>
                <h1>You have successfully logged out. What now?</h1>
              <Link to="/">Home</Link>
              <Link to="/login">Log In</Link>
            </p>
          </div>;
    }

export default LogOut;