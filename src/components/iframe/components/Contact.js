const Contact = () => {
  return (
    <div className='section contact'>
      <h1 className='title subheading'>// CONTACT:</h1>
      <div className='list contact'>
        <a
          className='button'
          href='https://twitter.com/Travis_Redden'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span>{' '}
          <span className='label'>Twitter</span>
        </a>
        <a
          className='button'
          href='https://www.linkedin.com/in/travisredden/'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span>{' '}
          <span className='label'>Linkedin</span>
        </a>
        <a
          className='button'
          href='https://github.com/Symphon-y'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span> <span className='label'>Github</span>
        </a>
        <a
          className='button'
          href='mailto:travisredden@outlook.com'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span>
          <span className='label'>travisredden@outlook.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
