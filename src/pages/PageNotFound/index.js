import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/404.png';
import './PageNotFound.css';
class NotFoundPage extends React.Component{
    render(){
        return <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"800px", flexDirection:"column" }}>
            <img src={PageNotFound} alt="empty fridge" style={{margin:"100px", display:"block"}} />
            <p style={{textAlign:"center"}}>
                <h1>Oops! The page that you're looking for can't be found. This fridge is empty :(</h1>
              <Link to="/">Return Home</Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;