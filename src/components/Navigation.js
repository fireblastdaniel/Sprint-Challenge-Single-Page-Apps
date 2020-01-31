import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/characters'>Characters</Link>
            </div>
        </div>
    );
}

export default Navigation;