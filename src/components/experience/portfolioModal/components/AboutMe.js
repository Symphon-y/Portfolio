import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';
import SupernovaLogo from './logos/SupernovaLogo';

const AboutMe = () => {
  return (
    <>
      <Header>
        <div className='info-stack'></div>
        <div className='aboutme-header-container'>
          <img
            className='avatar'
            src='https://avatars.githubusercontent.com/u/90964291?v=4?s=100'
            alt='sole inc logo'
          />
          <div className='aboutme-header-info-container'>
            <h1 style={{ marginBottom: '0rem', marginLeft: '.2rem' }}>
              Travis R. Redden
            </h1>
            <h2
              style={{
                marginTop: '0rem',
                marginBottom: '.5rem',
                marginLeft: '.2rem',
              }}>
              Full Stack Engineer
            </h2>
            <h3 style={{ marginTop: '0rem', marginLeft: '.2rem' }}>
              Tech Stack: React, R3F, 3JS, PostgreSQL, MongoDB, Express, Node.js
            </h3>
          </div>
        </div>
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
          these concerns I indexed our tables, used nested SQL queries to
          aggrigate data into json objects, and deployed multiple server
          instances behind a load balancer.
        </p>
        <h1 style={{ alignSelf: 'flex-start' }}>Questions Endpoint:</h1>
        <img
          className='portfolio-gif'
          src='https://i.imgur.com/NqLO2UZ.png'
          alt='Questions Endpoint Results'
        />
        <p>
          At 1k RPS (one thousand requests per second) the response time for the
          questions endpoint was reduced from 293ms to 6ms.
        </p>
        <h1 style={{ alignSelf: 'flex-start' }}>Answers Endpoint:</h1>
        <img
          className='portfolio-gif'
          src='https://i.imgur.com/4t2eiHZ.png'
          alt='Answers Endpoint Results'
        />
        <p>
          Similarly the response time for the answers endpoint was reduced from
          377ms to 6ms and the average error rate was able to be lowered from
          68.33% and 39.26% to 0% respectively.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
