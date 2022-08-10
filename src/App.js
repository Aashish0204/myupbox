import './App.css';
import React  from 'react';
import {Navbar} from './components/Navbar'
import {Home} from './components/Home'
import {Plans} from './components/Plans'
import {Work} from './components/Work'
import {SocialPost} from './components/SocialPost'
import {Footer} from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Plans/>
    <Work/>
    <SocialPost/>
    <Footer/>
    </>
  );
}

export default App;
