import React from 'react';
import ProjectList from '../ProjectList';


function Projects( currentProject) {

    const { name, description, url} = currentProject;


    return (
        <section>
           
            <h2 className="project">{name}</h2>
            <p>{description}</p><br />
            <p>{url}</p>
            <ProjectList project={currentProject.name} />
            
        </section>
    );  
 }

export default Projects;