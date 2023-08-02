import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/404.png';
import './PageNotFound.css';
class NotFoundPage extends React.Component{
    render(){
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"800px", flexDirection:"column" }}>
            <img src={PageNotFound} alt="empty fridge" style={{display:"block"}} />
            <p style={{textAlign:"center", fontFamily:"AlphaFridgeMagnets", fontSize:"20px"}}>
                Oops! The page that you're looking for can't be found. This fridge is empty :(
                  <br></br>
                  </p>
               <div></div>   
              <button className= "logOutButton"><Link to="/"> Return Home</Link></button>
          
          </div>;
    }
}
export default NotFoundPage;