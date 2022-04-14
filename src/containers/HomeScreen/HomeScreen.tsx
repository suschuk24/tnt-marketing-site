import React from 'react'
import LocationGrid from "../LocationGrid";
import LeadershipTeam from "../LeadershipTeam";
import NowHiring from "../NowHiring";
import ContactGrid from "../ContactGrid";
const HomeScreen = () => {
  return (
    <>
    <LocationGrid />
          <LeadershipTeam />
          <NowHiring />
          <ContactGrid />
    </>
  )
}

export default HomeScreen