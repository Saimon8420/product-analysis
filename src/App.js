import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/home' element={<Home />}></Route>

        <Route path='/review' element={<Reviews />}></Route>

        <Route path='/dashboard' element={<Dashboard />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
