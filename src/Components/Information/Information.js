import React, { useEffect, useState } from 'react';
import {
	addDataToLocalStorage,
	getDataFromLocalStorage,
} from '../../Utilities/dbHandler';
import ActivitiesCompleted from '../ActivitiesCompleted/ActivitiesCompleted';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreak from '../AddBreak/AddBreak';
import Profile from '../Profile/Profile';

const Information = ({ activityTime }) => {
	const [breakTime, setBreakTime] = useState(0);

	useEffect(() => {
		const storedData = getDataFromLocalStorage();
		setBreakTime(storedData);
	}, [breakTime]);

	const handleAddBreak = (data) => {
		const activityBreakTime = +data;
		addDataToLocalStorage(activityBreakTime);
		setBreakTime(activityBreakTime);
	};

	return (
		<div className="lg:sticky lg:top-10">
			<Profile />
			<AddBreak handleAddBreak={handleAddBreak} />
			<ActivityDetails
				activityTime={activityTime}
				breakTime={breakTime}
			/>
			<ActivitiesCompleted />
		</div>
	);
};

export default Information;
