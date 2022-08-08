import React from 'react';

const ModalProject = ({ onClose, currentProject }) => {
  
    const {name, description, url, github, index } = currentProject;

  return (
    <div>
      
            <div className="Modal"></div>
               <h3 className="modalName">{name}</h3>
                <img className="modalImg" src={require(`../../assets/images/${index}.jpg`)} alt={name} /> 
                <p>{description}</p>
                <a href={`${url}`}>{url}</a><br />
                <a href={`${github}`}>{github}</a>
                <button onClick={onClose} type="button">
                    Close
                </button>
    
    </div>
  );
}



export default ModalProject;