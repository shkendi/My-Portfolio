import React from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Interests from './components/Interests';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Contact from './components/Contact'
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <div>
			<NavBar />
			<Home />
			<Projects />
			<Skills />
			<Interests />
			<Contact />
			<SocialLinks />
		</div>
  );
}

export default App;
