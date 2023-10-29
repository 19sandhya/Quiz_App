import React from 'react';
import {Link } from "react-router-dom";

const Header = () =>{
return(
    <>
    <div className="title">
        <Link to="/" className='heading'><h1>MINDMAZE</h1></Link>
        <div className='divider'>
        <hr/>
        </div>

        
    </div>

    </>
);
};
export default Header;