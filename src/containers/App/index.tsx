import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from "../../components/Header";
import HomeScreen from '../HomeScreen';
import Footer from "../../components/Footer"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="App">
          <Routes>
            <Route path='/' element={
                <HomeScreen />
            }/>
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
