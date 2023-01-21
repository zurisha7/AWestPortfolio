// import React, { useState } from 'react';
import React from 'react';
import linkedIn from '../../assets/images/linkedIn.jpg';
import Github from '../../assets/images/github.jpg';
//  import { validator } from 'validator';

const Contact = ()=> {
       
//     const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});

//     const[emailError, setEmailError] = useState('');
//     const { name, email, subject, message } = formState;

//     const [status, setStatus] = useState('');


//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setStatus('Sending...')
        
//         let details = {
//             name: name.value,
//             email: email.value,
//             message: message.value
//         };

//         let response = await fetch('http://localhost:3000/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//             },
//             body: JSON.stringify(details),
//         });
//         setStatus('Submit');
//          let result = await response.json();
//          alert(result.status);
    
        
//         if(!emailError){
//             console.log('Form', formState);
//         }
//     };

//     const handleChange = (event) => {
//         let email = event.target.value

//         //use validator to ensure a valid email
//         if(validator.isEmail(email)){
//             setEmailError('')
//         } else {
//             setEmailError('Please enter a valid email!');
//         }
// //if there is no error use input as values
//         if(!emailError){
//             setFormState({...formState, [event.target.name]: event.target.value });
//             console.log('Handle Form', formState);
//         }
//     }
    return (

        
     
       <section className="contactform">
            <div className="contact">
                <div className="contactSection">
                    <h2 className="touch" data-text='Get in touch!!'>Get in touch!!</h2>                    
                        {/* <form method="POST" id="contactForm" onSubmit={handleSubmit}>
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
                                <input type='text' id="message" placeholder="Message" defaultValue={message} onBlur={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary"/>
                                <div className="submitting">{status}</div>
                            </div>
                        </form> */}
                
                    <div className="email">
                        <p><span>Email:</span> <a href="mailto:andreamichelewest@gmail.com">andreamichelewest@gmail.com</a></p>
                        
            <a href='http://www.linkedin.com/in/andrea-west-868396233' className='linkedIn'><img src={linkedIn} alt="linkedIn Icon" className='icon' />LinkedIn</a> 
            <a href="https://github.com/zurisha7"><img src={Github} alt='Github Icon' className='icon'/>Github</a>
                    </div>
                </div>
            </div>      
           {/* {emailError && (
            <div>
                <p className="errorMessage">{emailError}</p> </div>
                 )} */}
                 {/* </div> */}
   </section>
)
 }

export default Contact;