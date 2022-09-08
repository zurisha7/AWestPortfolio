import React from 'react';
import linkedIn from '../../assets/images/linkedIn.jpg';
import Github from '../../assets/images/github.jpg';

const Footer = () => {
    return (
       
        <footer className="footer">
            <div className='links'>
            <a href='http://www.linkedin.com/in/andrea-west-868396233' className='linkedIn'><img src={linkedIn} alt="linkedIn Icon" className='icon' /></a> 
            <a href="https://github.com/zurisha7"><img src={Github} alt='Github Icon' className='icon'/></a>
            <p className="thanks">Thanks for looking!</p>
            </div>
        </footer>
    );
};

export default Footer;