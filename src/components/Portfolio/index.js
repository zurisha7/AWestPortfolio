import React from 'react';
import ProjectList from '../ProjectList';


function Projects( currentProject) {

    const { name, description, url, github} = currentProject;


    return (
        <section>
           
            <h2 className="project">{name}</h2>
            <p>{description}</p><br />
            <p>{url}</p>
            <p>{github}</p>
            <ProjectList project={currentProject.name} />
            
        </section>
    );  
 }

export default Projects;