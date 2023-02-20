import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

export const Profile = () => {
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"800px", flexDirection:"column" }}>
           
            <p style={{textAlign:"center"}}>
                <h1>Profile page</h1>
              <Link to="/">Home</Link>
              <Link to="/login">Log In</Link>
            </p>
          </div>;
    }

export default Profile;