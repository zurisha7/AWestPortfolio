 import React, { useState } from 'react';
import ModalProject from '../ModalProject';



const ProjectList = ({ Portfolio }) => {
    const[currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ projects ] = useState([
        {
            name: 'Meet-Friends',
            description: 'An app to make new friends in your city',
            url: 'https://meet-friends-bootcamp.herokuapp.com/',
            github: 'https://github.com/SD-github21/meet-friends.git'
            
            
        },
        {
            name: 'Musitory',
            description: 'A music app to search for artists, albums, songs, lyrics.',
            url: 'https://macpat83.github.io/Musitory/',
            github: 'https://github.com/SD-github21/meet-friends.git'
          

        },
        {
            name: 'RunBuddy',
            description: 'A basic html and CSS app, that lets you see personal trainers and contact them for training sessions.',
            url: 'http://zurisha7.github.io/run-buddy/',
            github: 'https://github.com/zurisha7/run-buddy.git'
        },
        {
            name: 'Work-Day Scheduler',
            description: 'A place to schedule your workday!',
            url: 'https://zurisha7.github.io/WorkDay-scheduler/',
            github: 'https://github.com/zurisha7/WorkDay-scheduler.git'
        },
        {
            name: 'NoteTaker',
            description: 'A nodeJS application that lets the user write, save, and delete notes.',
            url: 'https://intense-brook-26087.herokuapp.com/notes',
            github: 'https://github.com/zurisha7/NoteTaker.git'

        },  
        {
            name: "Eat Sleep Workout Repeat",
            description: "A Workout app that let's you add food, workouts, and sleep!",
            url: 'https://lit-plains-44922.herokuapp.com/login',
            github: "https://github.com/zurisha7/EatSleepWorkoutRepeat.git"
        }
    ]);
  
    
    const toggleModal = ( image, i) => {
        setCurrentProject({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }
    

    return (
        <div>
            {isModalOpen && (
                <ModalProject onClose={toggleModal} currentProject={currentProject} />
            )}
        <h2>Portfolio</h2>
        <div className="flex-row">
            {projects.map(( project, index) => (
                 <img
                 src={require(`../../assets/images/${index}.jpg`)}
                  alt={project.name}
                 className="img-thumbnail"
                  onClick={() => toggleModal(project, index)}
                  key={project.name}
            />
            ))}
        </div>
    </div>
    );
};

export default ProjectList;