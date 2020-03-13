import React, { Component } from 'react';
import {Link} from  'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link><p></p>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {

    background: '#4f4f4f',
    color : '#fff',
    padding : '10px',
    textAlign : 'center'
  
  }

const linkStyle = {
    color : '#fff',
    textDecoration : 'none'
}

export default Header