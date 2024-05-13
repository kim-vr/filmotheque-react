import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Header from './components/Header'
import { Footer } from './components/Footer';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import AppBreadcrumb from './components/AppBreadcrumb';


function App() {
  return (
    <div id="shell" className="bg-body-tertiary">
      <Header/>
      <AppBreadcrumb/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
