import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Header from './components/Header'
import { Footer } from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div id="shell" class="bg-body-tertiary">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
