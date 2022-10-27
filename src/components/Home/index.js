import React from 'react'
import hey from '../../assets/images/Hey.jpg'

const Home = (props) => {

return (
     <section>
     <div className = "welcome">
     <div>
     <img src={hey} alt="hey" className='hey'></img>
    </div>
         <p>I'm Andrea! I'm a Full Stack Web Developer excited to show you my projects! Have a look around!!</p>
    </div>
    
    </section>
)

}

export default Home;