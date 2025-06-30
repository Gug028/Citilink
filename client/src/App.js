import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home form './pages/Home';
import Booking from './pages/Booking';
import Success from './pages/Success';

function App() {
	return (
		<Router>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/booking" element={<Booking />} />
		<Route path="/success" element={<Success />} />
		</Routes>
		</Router>
	);
}

export default App;
