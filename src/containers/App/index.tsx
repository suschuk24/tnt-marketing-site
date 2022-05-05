import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from "../../components/Header";
import HomeScreen from '../HomeScreen';
import Footer from "../../components/Footer"
import GoldenGateway from "../DaycareCenters/GoldenGateway";
import LocationGrid from "../LocationGrid";
import LeadershipTeam from "../LeadershipTeam";
import ContactGrid from "../ContactGrid";
import NowHiring from "../NowHiring";

const App = () => {
    return (
        <Router>
            <Header/>
            <main className="App">
                <Routes>
                    <Route path='/' element={
                        <HomeScreen/>
                    }/>
                    <Route path='/locations/golden-gateway' element={
                        <GoldenGateway />
                    }/>
                    <Route path='/locations' element={
                        <LocationGrid/>
                    }/>
                    <Route path='/leadership' element={
                        <LeadershipTeam/>
                    }/>
                    <Route path='/contact-us' element={
                        <ContactGrid/>
                    }/>
                    <Route path='/employment' element={
                        <NowHiring/>
                    }/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
