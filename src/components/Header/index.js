import React from 'react'

function Header(props) {
    const {
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="header">
                <h1 className="Andrea">Andrea West</h1>
            <nav>
                <ul>
                    <li>
                        <a href='#About' onClick={() => setContactSelected(false) && setPortfolioSelected(false) && setResumeSelected(false) }> About </a>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <a href='#Portfolio' onClick={() => setPortfolioSelected(true)}>Portfolio</a>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <a href='#Resume' onClick={() => setResumeSelected(true)}>Resume</a>
                    </li>                     
                    <li className={`${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                     </li>
                    </ul>
            </nav>
            
        </header>    
    );
};

export default Header;