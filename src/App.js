import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ImportantPoints from './components/importatPoints/importantPoints';
import About from './components/about/about';
import AboutCompany from './components/aboutCompany/aboutCompany';
import WorkStages from './components/workStages/workStages';
import OurPrograms from './components/ourPrograms/ourPrograms';
import OurClients from './components/ourClients/ourClients';
import Footer from './components/footer/footer';
import Blog from './components/blog/blog';


function App() {
  return (
    <div>
      <NavBar />
      <ImportantPoints />
      <About />
      <AboutCompany />
      <WorkStages />
      <OurPrograms />
      <OurClients />
      <Blog/>
      <Footer />
    </div>
  );
}

export default App;
