import React from 'react';

const Footer = () => {
    return (
        // need to figure out why link icons are not showing, but they will soon.
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container">Thanks for looking! <a href='http://www.linkedin.com/in/andrea-west-868396233' className='linkedIn'><img src='../../assets/images/linkedIn.jpg' alt="linkedIn Icon" className='icon' /></a> 
            <a href="https://github.com/zurisha7"><img src='../../assets/images/github.jpg' alt='Github Icon' className='icon'/></a>
            
            </div>
        </footer>
    );
};

export default Footer;