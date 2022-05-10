import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer />
     
    </div>
  );
}

export default App;
