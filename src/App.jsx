import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Nav from './components/nav/Nav';
import Projects from './components/projects/projects';
import Animation from './components/animation/animation'

function App() {
  return (
    <div className='app' id="home">
      <Nav/>
      <Home/>
      <hr></hr>
      <Projects/>
      <hr></hr>
      <About/>
      <hr></hr>
      <Contact/>
      <Animation/>
    </div>
  );
}

export default App;
