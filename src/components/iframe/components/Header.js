const Header = () => {
  const style = {
    display: 'flex',
    'max-width': '600px',
    'flex-direction': 'column',
    'align-items': 'flex-start',
    'justify-content': 'flex-start',
  };

  return (
    <div
      className='intro-container'
      style={{
        display: 'flex',
        'max-width': '600px',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'justify-content': 'flex-start',
      }}>
      <h1
        class='title'
        style={{
          'font-family': 'Oswald',
          'font-style': 'normal',
          'font-weight': 900,
          color: 'white',
        }}>
        TRAVIS REDDEN
      </h1>
      <h2 class='sub-title'>FULL STACK ENGINEER</h2>
      <p class='description'>
        Creative developer living in Texas, freelancer, writer of pithy articles
        and software engineer at Loopback Analytics.
      </p>
    </div>
  );
};

export default Header;
