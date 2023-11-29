import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Event from './Components/Events/Event';
import Home from './Components/Home';
import About from './Components/about/About';
import Team from "./Components/team/teams"
import LetsConnect from './Components/letsConnect/LetsConnect';
import Community from './Components/community/community';
import Faculty from './Components/faculties/faculties';
import bgimg from './Assets/panoramic-view-sunset-night.jpg'

const App = () => {
  const style = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover", // Adjust this property for sizing
    backgroundPosition: "bottom", // Adjust this property for positioning
    color: "white", // Text color
    height: "900px",
    overflow: "hidden", // This will prevent scrolling
  };
  return (
    <div>
    <Home />
    {/* <div style={style}> */}
      {/* <Event/> */}
    <Community />
    <About/>
    <Faculty />
    <Team />
    <LetsConnect />
    {/* </div> */}
    </div>
  )
}

export default App