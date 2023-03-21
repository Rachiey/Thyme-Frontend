import React from 'react';
import './logout.css';
import { useNavigate} from 'react-router';

export const LogOut = () => {
  const navigate = useNavigate();

  const LogIn = () => {
    navigate('/login')
}


  return (

      <>
<div className="doorBack">  

                                          
<div className="logOutTitle"> You have successfully logged out. What now?</div>
<div className ="logInBox">
    <button className="logInButton" onClick={LogIn}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> I</span>
                                            <span style= {{color: "#79D45E"}}> n</span>
                                          </button>
    </div>

  </div>

      </>
  
 ) }

export default LogOut;

