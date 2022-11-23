const Projects = () => {
  return (
    <div className='section section-projects'>
      <h1 className='title subheading projects'>// PROJECTS:</h1>
      <div className='list'>
        <div className='projects-container'>
          <a
            className='button'
            href='https://github.com/Team-Scar/Lingo-Lingo'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>
            <span className='label'>Lingo Lingo</span>
          </a>
          <a
            className='button'
            href='https://github.com/TitanInSpirit/Project_Atelier'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>
            <span className='label'>Sole Inc.</span>
          </a>
          <a
            className='button'
            href='https://github.com/FECTatooine'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>{' '}
            <span className='label'>Supernova</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
