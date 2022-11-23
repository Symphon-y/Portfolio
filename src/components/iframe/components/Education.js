const Education = () => {
  return (
    <div className='section section-education'>
      <h1 className='title subheading education'>// EDUCATION: </h1>
      <div className='list'>
        <div className='projects-container'>
          <a
            className='button'
            href='https://www.hackreactor.com/coding-bootcamp'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>{' '}
            <span className='label'>Hack Reactor '22</span>
          </a>
          <a
            className='button'
            href='https:www.shsu.edu'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>
            <span className='label'>SHSU | Masters '21</span>
          </a>
          <a
            className='button'
            href='https:www.shsu.edu'
            target='_blank'
            rel='noreferrer'>
            <span className='border'></span>
            <span className='label'>SHSU | Bachelors '20</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
