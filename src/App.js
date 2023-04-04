import React from 'react'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
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
			<About />
			<Contact />
			<SocialLinks />
		</div>
  );
}

export default App;
