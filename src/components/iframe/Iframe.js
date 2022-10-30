import Activities from './components/Activities';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';
import Publications from './components/Publications';
import './Iframe.css';

const Iframe = () => {
  return (
    <div className='i-container'>
      <Header />
      <Contact />
      <Activities />
      <Projects />
      <Publications />
      <Education />
    </div>
  );
};

export default Iframe;
