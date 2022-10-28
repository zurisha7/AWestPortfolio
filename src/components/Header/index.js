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
                <a href='/' className="Andrea">Andrea West</a>
            <nav>
            <ul>
                    <li>
                        <a href='awestportfolio/About' onClick={() => setContactSelected(false) && setPortfolioSelected(false) && setResumeSelected(false) }> About </a>
                    </li>
                    <li className={`${portfolioSelected && 'navActive'}`}>
                        <a href='awestportfolio/Portfolio' onClick={() => setPortfolioSelected(true)}>Portfolio</a>
                    </li>
                    <li className={`${resumeSelected && 'navActive'}`}>
                        <a href='awestportfolio/Resume' onClick={() => setResumeSelected(true)}>Resume</a>
                    </li>                     
                    <li className={`${contactSelected && 'navActive'}`}>
                        <a href='awestportfolio/Contact' onClick={() => setContactSelected(true)}>Contact</a>
                     </li>
                    </ul>
            </nav>
            
        </header>    
    );
};

export default Header;