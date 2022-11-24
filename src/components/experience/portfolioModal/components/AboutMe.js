/* eslint-disable react/jsx-no-comment-textnodes */
import BtnPrimary from '../../../shared/BtnPrimary';
import Header from './Header';
import Github from './logos/Github';
import LinkedIn from './logos/LinkedIn';
import MailIcon from './logos/MailIcon';
import MongoDBStatic from './logos/techstack/MongoDBStatic';
import NodeStatic from './logos/techstack/NodeStatic';
import PostgreSQLStatic from './logos/techstack/PostgreSQLStatic';
import ReactStatic from './logos/techstack/ReactStatic';
import ThreeStatic from './logos/techstack/ThreeStatic';

const AboutMe = () => {
  return (
    <>
      <Header>
        <div className='info-stack'></div>
        <div className='aboutme-header-container'>
          <img
            className='avatar'
            src='https://avatars.githubusercontent.com/u/90964291?v=4?s=100'
            alt='Travis Redden'
          />
          <div className='aboutme-header-info-container'>
            <h3>Hi all! I am</h3>
            <h1 style={{ fontSize: '2.614rem' }}>Travis Redden</h1>
            <h2>>Full Stack Engineer</h2>
            <div className='tech-stack-static-container'>
              <ReactStatic style={{ scale: '.95' }} />
              <ThreeStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
              <NodeStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
              <MongoDBStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
              <PostgreSQLStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
            </div>
          </div>
        </div>
      </Header>
      <div className='modal-body'>
        <h1 style={{ fontSize: '1.5rem', alignSelf: 'flex-start' }}>
          // About:
        </h1>
        <p>
          Thanks so much for stopping by. I'm Travis, a full stack software
          engineer based somewhere in the woods between Austin and Houston
          Texas. I'm a 90s kid brought up on Power Rangers, Lunchables, and
          Caprisun. In 1998, I broke my first computer (sorry mom and dad) and
          have had a passion for coding ever since. I'm an obsessive learner and
          I'm constantly challenging myself to expand my knowledge by diving
          headlong into the newest technologies.
        </p>
        <div className='aboutme-image-container'>
          <img
            className='portfolio-gif aboutme-pic'
            src='https://i.imgur.com/bne2uoH.jpg'
            alt='Questions Endpoint Results'
          />
          <img
            className='portfolio-gif aboutme-pic'
            src='https://i.imgur.com/udap2Kc.jpg'
            alt='Questions Endpoint Results'
          />
          <img
            className='portfolio-gif aboutme-pic'
            src='https://i.imgur.com/NCcVQPf.jpg'
            alt='Questions Endpoint Results'
          />
        </div>
        <p>
          I have a masters degree from Sam Houston State University (EAT EM UP,
          KATS!) and in my spare time I enjoy Renaissance fairs, archery,
          kayaking, and composing music.
        </p>
        <img
          className='portfolio-gif aboutme-video'
          src='https://media.giphy.com/media/5hMgvzES8FgudyP3UJ/giphy.gif'
          alt='Questions Endpoint Results'
        />
        <h1 style={{ alignSelf: 'flex-start' }}>// Connect:</h1>

        <p>
          If you got this far, I'd love to hear from you! Check out my links
          below and say hi!
        </p>
        <div className='aboutme-footer'>
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
              window.open(
                'https://www.linkedin.com/in/travisredden/',
                '_blank'
              );
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
              <LinkedIn
                style={{ fill: 'white', scale: '1.2', width: '2rem' }}
              />
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
    </>
  );
};

export default AboutMe;
