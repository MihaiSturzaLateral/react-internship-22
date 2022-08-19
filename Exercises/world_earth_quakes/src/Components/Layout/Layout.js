import React from 'react'
import {Outlet,Link,useLocation} from 'react-router-dom'
import './Layout.css'
import Footer from '../Footer/Footer'



const Layout=()=>{
    let isVisible;
    const location=useLocation();
    location.pathname==="/" ? (isVisible=true) : (isVisible=false);
    return(
        <>
         <nav>
            <ul className='ulHeader'>
                <li className='logo'>WorldEarthQuakes</li>
                <li>
                    <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to='/AboutPage'>About</Link>
                </li>
                <li>
                    <Link className='link' to='/ContactPage'>Contact</Link>
                </li>
                
                {isVisible&&
                 <li className='searchBar'>
                    <input type='text' placeholder='Search...'></input>
                    <button>Search</button>
                </li>
                }
                
            </ul>
         </nav>
         <Footer/>
         <Outlet/>
        </>
    )
}

export default Layout;