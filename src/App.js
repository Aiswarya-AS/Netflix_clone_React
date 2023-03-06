import React from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,originals} from './urls'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies'isSmall />
      
      <Footer/>
    </div>
    
  );
}

export default App;
