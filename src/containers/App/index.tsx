import React from 'react';
import './App.css';
import Header from "../../components/Header";
import LocationGrid from "../LocationGrid";
import LeadershipTeam from "../LeadershipTeam";
import NowHiring from "../NowHiring";
import ContactGrid from "../ContactGrid";
import Footer from "../../components/Footer"

const App = () => {
  return (
    <div className="App">
        <Header />
        <LocationGrid />
        <LeadershipTeam />
        <NowHiring />
        <ContactGrid />
        <Footer />
    </div>
  );
}

export default App;
