const Publications = () => {
  return (
    <div class='section publications'>
      <h1 class='title subheading publication-title'>PUBLICATIONS</h1>
      <div class='article-container'>
        <a
          class='button article'
          href='https://medium.com/@TravisRedden/solving-the-reverse-integer-problem-b7f151910614'
          target='_blank'
          rel='noreferrer'>
          <span class='border'></span>
          <span class='label'>Solving: The Reverse Integer Problem</span>
        </a>
        <a
          class='button article'
          href='https://medium.com/@TravisRedden/solving-the-group-anagrams-problem-6a86f15375e0'
          target='_blank'
          rel='noreferrer'>
          <span class='border'></span>{' '}
          <span class='label'>Solving: The Group Anagrams Problem</span>
        </a>
      </div>
    </div>
  );
};

export default Publications;
