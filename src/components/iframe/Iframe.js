import Activities from './components/Activities';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';

import './Iframe.css';
import { useState } from 'react';
import BrowserHeader from './components/BrowserHeader';
import Header from '../experience/portfolioModal/components/Header';
import ReactStatic from '../experience/portfolioModal/components/logos/techstack/ReactStatic';
import ThreeStatic from '../experience/portfolioModal/components/logos/techstack/ThreeStatic';
import NodeStatic from '../experience/portfolioModal/components/logos/techstack/NodeStatic';
import MongoDBStatic from '../experience/portfolioModal/components/logos/techstack/MongoDBStatic';
import PostgreSQLStatic from '../experience/portfolioModal/components/logos/techstack/PostgreSQLStatic';

const Iframe = ({ activeObject, handleZoom, handleUnzoom }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (!clicked) {
          handleZoom('SCREEN');
          setClicked(!clicked);
        } else {
          handleUnzoom();
          setClicked(!clicked);
        }
      }}
      className={'i-container'}>
      <BrowserHeader />
      <div style={{ paddingLeft: '2rem' }}>
        <Header>
          <div className='info-stack'></div>
          <div className='aboutme-header-container'>
            <img
              className='avatar'
              src='https://avatars.githubusercontent.com/u/90964291?v=4?s=100'
              alt='Travis Redden'
            />
            <div className='aboutme-header-info-container'>
              <h1 style={{ fontSize: '2.614rem' }}>Travis Redden</h1>
              <h2>>Full Stack Engineer</h2>
              <div className='tech-stack-static-container-named'>
                <div className='tech-container-with-name'>
                  <ReactStatic style={{ scale: '.95' }} />
                  <p className='tech-stack-name'>React</p>
                </div>
                <div className='tech-container-with-name'>
                  <ThreeStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
                  <p className='tech-stack-name'>Three.js</p>
                </div>
                <div className='tech-container-with-name'>
                  <NodeStatic style={{ scale: '.95', marginLeft: '.7rem' }} />
                  <p className='tech-stack-name'>Node.js + Express</p>
                </div>
                <div className='tech-container-with-name'>
                  <MongoDBStatic style={{ scale: '.95' }} />
                  <p className='tech-stack-name'>MongoDb</p>
                </div>
                <div className='tech-container-with-name'>
                  <PostgreSQLStatic
                    style={{ scale: '.95', marginLeft: '.7rem' }}
                  />
                  <p className='tech-stack-name'>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </Header>
        <ReactStatic
          style={{
            pointerEvents: 'none',
            opacity: '.25',
            position: 'fixed',
            left: '70%',
            top: '60%',
            scale: '15',
          }}
        />
        <ThreeStatic
          style={{
            pointerEvents: 'none',
            opacity: '.25',
            position: 'fixed',
            left: '90%',
            top: '40%',
            scale: '5',
          }}
        />
        <MongoDBStatic
          style={{
            pointerEvents: 'none',
            transform: 'rotate(-60deg)',
            opacity: '.25',
            position: 'fixed',
            left: '70%',
            top: '25%',
            scale: '4',
          }}
        />
        <NodeStatic
          style={{
            pointerEvents: 'none',
            transform: 'rotate(-60deg)',
            opacity: '.25',
            position: 'fixed',
            left: '82%',
            top: '20%',
            scale: '2.5',
          }}
        />
        <PostgreSQLStatic
          style={{
            pointerEvents: 'none',
            transform: 'rotate(60deg)',
            opacity: '.25',
            position: 'fixed',
            left: '90%',
            top: '25%',
            scale: '1.25',
          }}
        />

        <Activities />
        <Projects
          activeObject={activeObject}
          handleZoom={handleZoom}
          handleUnzoom={handleUnzoom}
        />
        <Publications />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default Iframe;
