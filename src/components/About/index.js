import React from 'react'
import andreaImage from "../../assets/images/Andrea2.jpg";

function About () {

    return (
        // JSX For the About component
        <section className="aboutSection">
            <h2 id="aboutTitle">About</h2>
            <div className="About">
            <img src={andreaImage} style={{ width: "25%", height: "300px" }} alt="Andrea West" />
            <div className="aboutText">
               <p> I live near Austin, Texas and have earned my certificate in full stack web development from the University of Texas at Austin. I have worked in the customer service industry for many years, then worked as a teller in an armored trucking company, and as a hybrid administrative assistant.
                 After having my children, I stayed at home to support my family. Now the children are older, I have decided to enter the tech world and am excited to learn and create. In my free time, I enjoying long drives with loud music, watching an awesome band live, or getting onstage myself and singing karaoke.

                </p>
            </div>
            </div>
        </section>
    )
}

export default About;