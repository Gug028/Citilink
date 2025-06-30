import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
	const [form, setForm] = useState({
		name: '',
		origin: '',
		destination: '',
		date: '',
		passengers: 1
	});

	const handleSumbit = async (e) => {
		e.preventDefault();
		const res = await axios.post('http://locathost:5000/api/book', form);
		window.location.href = res.data.redirectUrl; // PayFast link or confirmation
	};

	return (
		<div className="max-w-md mx-auto py-10">
		<h2 className="text-2xl mb-4">Book a Ticket</h2>
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
		<input type="text" placeholder="Full Name" required
		onChange={e => setForm({ ...form, name: e.target.value })} />
		<input type="text" placeholder="Origin" required
		onChange={e => setForm({ ...form, origin: e.target.value })} />
		<input type="text" placeholder="Destination" required
		onChange={e => setForm({ ...form, destination: e.target.value })} />
		<input type="number" min="1" placeholder="Passengers"
		onChange={e => setForm({ ...form, passengers: e.target.value })} />
		<button className="bg-green-600 text-white py-2 rounded">Proceed to Payment</button>
		</form>
		</div>
	);
};

export default Booking;
