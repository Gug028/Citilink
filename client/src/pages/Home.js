import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
		<h1 className="text-4xl font-bold mb-4"<Welcome to Citilink</h1>
		<p className="mb-6">Book your journey across South Africa with ease.</p>
		<Link to="/booking" className="bg-blue-600 text-white px-6 py-2 rounded">Book a Ticket</Link>
		</div>
	);
};

export default Home;
