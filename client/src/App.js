import React from 'react';

//?STYLES
import './App.css';

//?COMPONENTS
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<HomePage />
		</div>
	);
}

export default App;
