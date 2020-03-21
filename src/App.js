import React from 'react';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Services from './components/services/services';
import OurCompany from './components/our-company/our-company';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <OurCompany />
      <Footer/>
    </div>
  );
}

export default App;
