import React from 'react'
import andreaImage from "../../assets/images/IMG_1530.jpg";

function About () {

    return (
        // JSX For the About component
        <section className="aboutSection">
            <h2 id="aboutTitle">About</h2>
            <div className="About">
            <img src={andreaImage} style={{ width: "25%", height: "300px" }} alt="Andrea West" />
            <div className="aboutText">
                <p>
                 Andrea grew up in Pennsylvania and has been living in Texas and Virginia since. Currently, she is living in Austin, Texas and will earn her certificate in full stack development from the coding Bootcamp at UT Austin at the end of August 2022. She worked in the customer service industry for many years, then also worked as a teller at a few banks and then an armored trucking company. 
                 After having her children, Andrea stayed home to help raise them. Now the children are older, she decided she was ready to get back into the workforce and use her creativity in the coding world. When she has free time, Andrea loves to get in the car, drive, and listen to loud music, maybe a night out watching an awesome band, or getting onstage herself and singing karaoke.

                </p>
            </div>
            </div>
        </section>
    )
}

export default About;