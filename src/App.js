
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/Home.css'
import './styles/About.css'
import './styles/Projects.css'
import './styles/Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Routes/Home';
import About from './Routes/About';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;