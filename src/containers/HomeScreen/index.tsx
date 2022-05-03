import React from 'react'
import LocationGrid from "../LocationGrid";
import LeadershipTeam from "../LeadershipTeam";
import NowHiring from "../NowHiring";
import ContactGrid from "../ContactGrid";
import About from "./components/About";
const HomeScreen = () => {
  return (
      <>
          <About />
          <LocationGrid />
          {/*<LeadershipTeam />*/}
          {/*<NowHiring />*/}
          {/*<ContactGrid />*/}
      </>
  );
}

export default HomeScreen;
