/* eslint-disable react/jsx-no-comment-textnodes */
import Github from '../../experience/portfolioModal/components/logos/Github';
import LinkedIn from '../../experience/portfolioModal/components/logos/LinkedIn';
import MailIcon from '../../experience/portfolioModal/components/logos/MailIcon';
import BtnPrimary from '../../shared/BtnPrimary';
import ResumeIcon from './Icons/ResumeIcon';

const Contact = () => {
  return (
    <div className='section contact'>
      <h1 className='title subheading'>// CONTACT:</h1>
      <div className='iframe-contact-links-container'>
        <BtnPrimary
          className={'btn-primary iframe-contact-button'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://github.com/Symphon-y', '_blank');
          }}>
          <div className='iframe-contact-button-container'>
            <Github className={'iframe-contact-button-icon'} />
            <span className='iframe-contact-button-text'>View My Github</span>
          </div>
        </BtnPrimary>
        <BtnPrimary
          className={'btn-primary iframe-contact-button'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://www.linkedin.com/in/travisredden/', '_blank');
          }}>
          <div className='iframe-contact-button-container'>
            <LinkedIn className={'iframe-contact-button-icon'} />
            <span className='iframe-contact-button-text'>LinkedIn</span>
          </div>
        </BtnPrimary>
        <BtnPrimary
          className={'btn-primary iframe-contact-button'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('mailto:travisredden@outlook.com', '_blank');
          }}>
          <div className='iframe-contact-button-container'>
            <MailIcon
              className={'iframe-contact-button-icon'}
              style={{ scale: '.9' }}
            />
            <span className='iframe-contact-button-text'>Email</span>
          </div>
        </BtnPrimary>
        <BtnPrimary
          className={'btn-primary iframe-contact-button'}
          onClick={(e) => {
            e.stopPropagation();
            window.open('/Travis_Redden_Resume.pdf', '_blank');
          }}>
          <div className='iframe-contact-button-container'>
            <ResumeIcon
              className={'iframe-contact-button-icon'}
              style={{ scale: '.75' }}
            />
            <span className='iframe-contact-button-text'>Download Resume</span>
          </div>
        </BtnPrimary>
      </div>
    </div>
  );
};

export default Contact;
