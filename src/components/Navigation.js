import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Navigation = () => {
    return (
        <div class='nav'>
            <div className='nav-item'>
                <Link to='/'>Home</Link>
            </div>
            <div className='nav-item'>
                <Link to='/characters'>Characters</Link>
            </div>
        </div>
    );
}

export default Navigation;