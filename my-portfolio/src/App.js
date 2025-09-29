import Content from './contents/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer name={"Zeni Zuanda"}/>
    </div>
  );
}

export default App;
