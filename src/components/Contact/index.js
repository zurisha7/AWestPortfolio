import React, { useState } from 'react';
 import { validator } from 'validator';

const Contact = ()=> {
       
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});

    const[emailError, setEmailError] = useState('');
    const { name, email, subject, message } = formState;

    const [status, setStatus] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...')
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        let response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(details),
        });
        setStatus('Submit');
         let result = await response.json();
         alert(result.status);
    
        
        if(!emailError){
            console.log('Form', formState);
        }
    };

    const handleChange = (event) => {
        let email = event.target.value

        //use validator to ensure a valid email
        if(validator.isEmail(email)){
            setEmailError('')
        } else {
            setEmailError('Please enter a valid email!');
        }
//if there is no error use input as values
        if(!emailError){
            setFormState({...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
        }
    }
    return (

        
     
       <section className="contactform">
            <div className="contact">
                <div className="contactSection">
                    <h2 className="touch">Get in touch!!</h2>                    
                        <form method="POST" id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" id="subject" placeholder="Subject" defaultValue={subject} onBlur={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" placeholder="Message" defaultValue={message} onBlur={handleChange} ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary"/>
                                <div className="submitting">{status}</div>
                            </div>
                        </form>
                </div>
                    <div className="email">
                        <p><span>Email:</span> <a href="mailto:andreamest7@gmail.com">andreamwest7@gmail.com</a></p>
                    </div>
                </div>
                    
           {emailError && (
            <div>
                <p className="errorMessage">{emailError}</p> </div>
                 )}
   </section>
    );
 }

export default Contact;