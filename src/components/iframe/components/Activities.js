import '../Iframe.css';
const Activities = () => {
  return (
    <div className='section activities-container'>
      <h1 className='title subheading activities'>// ACTIVITIES:</h1>
      <div className='list'>
        <div className='item'>
          <div className='name'>
            SOFTWARE ENGINEER <span style={{ color: '#4D5BCE' }}>AT</span>{' '}
            LOOPBACK ANALYTICS
          </div>
          <div className='period'>
            <span className='date'>2022</span>{' '}
            <span className='arrow'>&gt;</span>
            <span className='date'>TODAY</span>
          </div>
        </div>
      </div>
      <div className='list'>
        <div className='item'>
          <div className='name'>FREELANCER</div>
          <div className='period'>
            <span className='date'>2022</span>{' '}
            <span className='arrow'>&gt;</span>
            <span className='date'>TODAY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
