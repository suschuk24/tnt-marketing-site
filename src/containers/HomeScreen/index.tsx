import React from 'react'
import LocationGrid from "./components/LocationGrid";
import LeadershipTeam from "./components/LeadershipTeam";
import NowHiring from "./components/NowHiring";
import ContactGrid from "./components/ContactGrid";
const HomeScreen = () => {
  return (
      <>
          <LocationGrid />
          <LeadershipTeam />
          <NowHiring />
          <ContactGrid />
      </>
  );
}

export default HomeScreen;
