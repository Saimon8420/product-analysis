import React from 'react';
import CustomLink from './CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <CustomLink to='/'>Home</CustomLink>

            <CustomLink to='/review'>Review</CustomLink>

            <CustomLink to='/dashboard'>Dashboard</CustomLink>
        </div>
    );
};

export default Header;