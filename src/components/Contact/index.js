import React, { useState } from 'react';
import validator from 'validator'

function ContactForm () {
    //this sets the State for the form
    const[formState, setFormState] = useState({ name: '', email: '', message: '' });


    const[emailError, setEmailError] = useState('')
    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        //what happens when you submit the form
        event.preventDefault();
        if(!emailError) {
            console.log('Form', formState);
        }
    };

        const validateEmail = (event) => {
            let email = event.target.value
            //a validator from react that validates an email
    
            if(validator.isEmail(email)){
              setEmailError("")
              } else {
                setEmailError("That email isn't correct! Try again!")
              }
                         
            if(!emailError){
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
            }
        }
return (
    <section className='Contact'>

        {/* need to style this form */}
        <h1 className="h1Contact">Email Me!</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={validateEmail} />            
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" defaultValue={email} onBlur={validateEmail} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleSubmit} />
            </div>
             <button type="submit" className="btn">Submit</button>
            {emailError && (
                <div>
                    <p className="errorMessage">{emailError}</p>
                </div>
            )}
        </form>
        <div className="contact-email">
        <h2>andreamwest7@gmail.com</h2>
        </div>
    </section>
    
);
}


export default ContactForm;