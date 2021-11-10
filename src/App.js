import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import IconSection from './components/IconSection/IconSection';
import Vehicles from './components/Vehicles/Vehicles';
import Services from './components/Services/Services';
import Featured from './components/Featured/Featured';
import Newsletter from './components/Newsletter/Newsletter';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <IconSection />
      <Vehicles />
      <Services />
      <Featured />
      <Newsletter />
      <Review />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
