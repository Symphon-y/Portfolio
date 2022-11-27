const Projects = ({
  setModal,
  modal,
  activeObject,
  handleZoom,
  handleUnzoom,
}) => {
  return (
    <div className='section section-projects'>
      <h1 className='title subheading projects'>// PROJECTS:</h1>
      <div className='list'>
        <div className='projects-container'>
          <div
            className='button'
            onClick={(e) => {
              e.stopPropagation();
              handleZoom('PHONE');
            }}
            onPointerMissed={() => {
              handleUnzoom();
            }}>
            <span className='border'></span>
            <span className='label'>Lingo Lingo</span>
          </div>
          <div
            className='button'
            onClick={(e) => {
              e.stopPropagation();
              handleZoom('SHOE');
            }}
            onPointerMissed={() => {
              handleUnzoom();
            }}>
            <span className='border'></span>
            <span className='label'>Sole Inc.</span>
          </div>
          <div
            className='button'
            onClick={(e) => {
              e.stopPropagation();
              handleZoom('PLANET');
            }}
            onPointerMissed={() => {
              handleUnzoom();
            }}>
            <span className='border'></span>{' '}
            <span className='label'>Supernova</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
