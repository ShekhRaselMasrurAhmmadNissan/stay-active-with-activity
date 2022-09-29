import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Information from '../Information/Information';

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
		<div className="grid grid-cols-5">
			<div className="col-span-4 mt-20 p-8 pr-0">
				<Header />
				<Activities activities={activities} />
			</div>
			<div className="col-span-1 bg-gray-400">
				<Information />
			</div>
		</div>
	);
};

export default Home;
