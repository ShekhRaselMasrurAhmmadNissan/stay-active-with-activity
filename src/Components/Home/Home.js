import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Information from '../Information/Information';

const Home = () => {
	const [activities, setActivities] = useState([]);
	const [activityTime, setActivityTime] = useState(0);

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

	const handleRequiredTime = (requiredTime) => {
		const newRequiredTime = activityTime + requiredTime;
		setActivityTime(newRequiredTime);
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-5">
			<div className="col-span-1 lg:col-span-4 mt-20 lg:p-8 pr-0">
				<Header />
				<Activities
					activities={activities}
					handleRequiredTime={handleRequiredTime}
				/>
			</div>
			<div className="col-span-1 bg-gray-400 mt-10 lg:mt-0 md:mx-8 lg:mx-0 rounded-xl lg:rounded-b-xl pb-8 md:px-8 lg:px-0">
				<Information
					activityTime={activityTime}
					setActivityTime={setActivityTime}
				/>
			</div>
		</div>
	);
};

export default Home;
