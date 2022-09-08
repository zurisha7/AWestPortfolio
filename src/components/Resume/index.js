import React, { useState }from 'react'
import Modal from 'react-modal';
// import { pdfjs } from 'react-pdf';
// import { Document } from 'react-pdf/dist/esm/entry.webpack5';


// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js'

const Resume = () => {
     const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);

  }


  Modal.setAppElement('body');

  return (
    <div >
      <button onClick={openModal}><img className="resumeThumb" src={require(`../../assets/images/Andrea_West_Resume.jpg`)} alt='West thumbnail' /></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resume"
        classname='resumeModal'
      >
        
        <button className='resumeCloseBtn' onClick={closeModal}>Close</button>
        <img src={require('../../assets/images/Andrea_West_Resume.jpg')} alt="West Resume" />
      </Modal>
    </div>
  );
  }

export default Resume;
