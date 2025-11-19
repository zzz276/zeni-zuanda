import Container from 'react-bootstrap/Container';
import About from './About';
import Projects from './Projects';
import Project from '../models/Project';

function Content() {
  // const researches = [
    
  // ];

  const projects = [
    new Project('BinusLite', 'Flutter · Firebase', 'https://github.com/zzz276/BinusLite'),
    new Project('Defense of The Willi', 'Java · Game Dev', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EVI0M6-r9ghHhv9akhaHWFIBOeV0bOzjqMj-m9la5DFg5w?e=IOrqsd'),
    new Project('DoJo Movie', 'Kotlin · MVVM', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EeU_7TlhEPtBh0fJXuBrkv4BAcnqqt0mfyTv3qUpgAjI1A?e=kAOTKT'),
    new Project('What Generator', 'Kotlin · Compose', 'https://1drv.ms/u/c/e5956a9184ccc1cb/EWq0pqMtdStKtflvrhYStXIBAgLzNoPHovF3G_f_O7CtKQ?e=Eu6G59'),
    new Project('GPS-Tracker', 'Arduino · IoT', 'https://github.com/zzz276/GPS-Tracker')
  ];

  return (
    <Container fluid className='cs-content'>
      <About />
      <Projects projects={projects} />
      {/* <Researches researches={researches} /> */}
    </Container>
  );
}

export default Content;
