import React from 'react'
import hey from '../../assets/images/Hey.jpg'

const Home = (props) => {

return (
     <section>
     <div className = "welcome">
        <h2>Welcome!!</h2>
         <p>I'm Andrea! I'm a Full Stack Web Developer excited to show you what I have done! Have a look around!!</p>
    </div>
    <div>
     <img src={hey} alt="hey" className='hey'></img>
    </div>
    </section>
)

}

export default Home;