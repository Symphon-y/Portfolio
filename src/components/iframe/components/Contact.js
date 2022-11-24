import Github from '../../experience/portfolioModal/components/logos/Github';
import LinkedIn from '../../experience/portfolioModal/components/logos/LinkedIn';
import MailIcon from '../../experience/portfolioModal/components/logos/MailIcon';
import BtnPrimary from '../../shared/BtnPrimary';

const Contact = () => {
  return (
    <div className='section contact'>
      <h1 className='title subheading'>// CONTACT:</h1>
      <div className='iframe-contact-links-container'>
        <BtnPrimary
          className={'btn-primary github'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://github.com/Symphon-y', '_blank');
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: '1rem',
              marginLeft: '1rem',
            }}>
            <Github style={{ width: '2rem' }} />
            View My Github
          </div>
        </BtnPrimary>
        <BtnPrimary
          className={'btn-primary github'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://www.linkedin.com/in/travisredden/', '_blank');
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginRight: '1rem',
              marginLeft: '1rem',
            }}>
            <LinkedIn style={{ fill: 'white', scale: '1.2', width: '2rem' }} />
            LinkedIn
          </div>
        </BtnPrimary>
        <BtnPrimary
          className={'btn-primary github'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('mailto:travisredden@outlook.com', '_blank');
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginRight: '1rem',
              marginLeft: '1rem',
            }}>
            <MailIcon style={{ fill: 'white', scale: '.9', width: '2rem' }} />
            Email
          </div>
        </BtnPrimary>
      </div>
    </div>
  );
};

export default Contact;
