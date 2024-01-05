import './index.css';
import About from './components/about';
import Navbar from './components/navbar';
import Work from './components/work';

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
    </div>
  );
};

export default App;
