import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    
    

    return (
        <header className="header">
                <Link to='/' className="Andrea">Andrea West</Link>
            <nav>
            <ul>
                    <li>
                        <Link to='/About'> About </Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/Resume'>Resume</Link>
                    </li>                     
                    <li>
                        <Link to='/Contact'>Contact</Link>
                     </li>
                    </ul>
            </nav>
            
        </header>    
    );
};

export default Header;