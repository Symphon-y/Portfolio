import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';

const SoleInc = () => {
  return (
    <>
      <Header>
        <div className='info-stack'>
          <h3 style={{ marginTop: '0rem' }}>Role: Full Stack Engineer</h3>
        </div>
        <img
          src='https://raw.githubusercontent.com/TitanInSpirit/Project_Atelier/main/Assets/Logo%20-%20Darkv1.png'
          alt='sole inc logo'
        />
        <BtnPrimary
          className={'btn-primary github'}
          style={{ backgroundColor: '#80dbd8' }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://github.com/TitanInSpirit/Project_Atelier#readme',
              '_blank'
            );
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Github style={{ width: '2rem' }} />
            View On Github
          </div>
        </BtnPrimary>
      </Header>
      <div className='modal-body'>
        <h1 style={{ alignSelf: 'flex-start' }}>About:</h1>
        <p>
          Our team was tasked with creating a complete redesign of an outadated
          client-facing retail web-portal including but not limited to branding,
          and website functionality. This project comprises a complete redesign
          of the retail portal intended to address the client's concerns and
          modernize the site.
        </p>
        <img
          className='portfolio-gif'
          src='https://media.giphy.com/media/UTUQxOIuzmxGlWXmOZ/giphy.gif'
          alt='overview component gif'
        />
        <h1 style={{ alignSelf: 'flex-start' }}>Components:</h1>
        <p>
          This section provides a broad overview of just a few of the exciting
          functionalities our team implemented for the Lingo Lingo web platform.
        </p>
      </div>
    </>
  );
};

export default SoleInc;
