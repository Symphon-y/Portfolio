import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';
import SupernovaLogo from './logos/SupernovaLogo';

const SupernovaInfo = () => {
  return (
    <>
      <Header>
        <div className='info-stack'>
          <h3 style={{ marginTop: '0rem' }}>Role: Full Stack Engineer</h3>
        </div>
        <SupernovaLogo style={{ width: '30rem' }} />
        <BtnPrimary
          className={'btn-primary github'}
          style={{ backgroundColor: '#EF3B46' }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://github.com/FECTatooine/Questions_and_Answers#readme',
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
          Previously our team was tasked with creating a complete redesign of an
          outdated client-facing retail web-portal including but not limited to
          branding, and website functionality. This project comprises a complete
          redesign of the back-end architecture for that retail portal intended
          to address the client's concerns of speed and scalability. To address
          the clients concerns of speed and scalability I indexed our tables,
          used nested SQL queries to aggrigate data into json objects, and
          deployed multiple server instances behind a load balancer.
        </p>
        <h2 style={{ alignSelf: 'flex-start' }}>Questions Endpoint:</h2>

        <img
          className='portfolio-gif'
          src='https://i.imgur.com/NqLO2UZ.png'
          alt='overview component gif'
        />
        <p>
          This section provides a broad overview of just a few of the exciting
          functionalities our team implemented for the Lingo Lingo web platform.
        </p>
      </div>
    </>
  );
};

export default SupernovaInfo;
