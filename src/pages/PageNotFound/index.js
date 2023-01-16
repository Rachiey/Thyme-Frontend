import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/404.png';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} alt="empty fridge"  />
            <p style={{textAlign:"center"}}>
                <p>hello</p>
              <Link to="/">Return Home</Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;