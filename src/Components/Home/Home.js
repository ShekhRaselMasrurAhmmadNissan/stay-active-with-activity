import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';

const Home = () => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		const loadActivities = async () => {
			try {
				const res = await fetch('fakeData.json');
				const data = await res.json();
				setActivities(data);
			} catch (error) {
				console.log(error);
			}
		};
		loadActivities();
	}, []);

	return (
		<div>
			<h1>{activities.length}</h1>
			<Header />
			<Activities />
		</div>
	);
};

export default Home;
