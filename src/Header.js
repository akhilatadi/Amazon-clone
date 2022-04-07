import React from 'react'
import "./Header.css" 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

const [{basket, user }, dispatch] = useStateValue();
const handleAuthentication = () => {
    if(user) {
        auth.signOut();
    }
}

    return (
        <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <img className='header_logo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/online-pig-weight-calculator-amazon-png-logo-vector-23.png" alt="amazon logo"/>
        </Link>
            
       
       <div className='header_search'>
       <input className='header_searchbar' type="text"/>
       <button type="button" class="btn btn-dark ">Search</button>
       </div>
      
           
      
        
        <div className='header_nav'>
           <Link to={!user && "/login"}  style={{ textDecoration: 'none' }}>

            <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLine1'>
             Hello  {!user ? "Guest" : user.email}
               </span>
               <span className='header_optionLine2'>{user ? 'sign Out' : 'Sign In '}
           
               </span>
            </div>
            </Link>
            <div className='header_option'>
            <span className='header_optionLine1'>
            Returns 
               </span>
               <span className='header_optionLine2'>
           &Orders
               </span>
            </div>

            <div className='header_option'>
            <span className='header_optionLine1'>
         Your 
               </span>
               <span className='header_optionLine2'>
          Prime
               </span>
            </div>


<Link to="/checkout" style={{ textDecoration: 'none' }}>

<span className='header_cartCount'>🛒{basket?.length}</span>
</Link>




        </div>
        
        
        </div>
    )
}

export default Header
