const Publications = () => {
  return (
    <div className='section publications'>
      <h1 className='title subheading publication-title'>PUBLICATIONS</h1>
      <div className='article-container'>
        <a
          className='button article'
          href='https://medium.com/@TravisRedden/solving-the-reverse-integer-problem-b7f151910614'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span>
          <span className='label'>Solving: The Reverse Integer Problem</span>
        </a>
        <a
          className='button article'
          href='https://medium.com/@TravisRedden/solving-the-group-anagrams-problem-6a86f15375e0'
          target='_blank'
          rel='noreferrer'>
          <span className='border'></span>{' '}
          <span className='label'>Solving: The Group Anagrams Problem</span>
        </a>
      </div>
    </div>
  );
};

export default Publications;
