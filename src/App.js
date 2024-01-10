import './index.css';
import About from './components/about';
import Navbar from './components/navbar';
import Work from './components/work';
import LoginForm from './components/loginform';
const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <LoginForm/>
    </div>
  );
};

export default App;
