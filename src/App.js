import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}>
          <Route path="about" element = {<About/>}/>
          <Route path="contact" element = {<Contact/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
