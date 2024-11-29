import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.tsx';
import Content from './components/content/content.tsx';
import Footer from './components/footer/footer.tsx';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
