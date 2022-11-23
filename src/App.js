import './App.css';
import { Outlet } from 'react-router';
import PortfolioModal from './components/experience/portfolioModal/PortfolioModal';

function App() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
