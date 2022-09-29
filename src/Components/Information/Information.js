import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreak from '../AddBreak/AddBreak';
import Profile from '../Profile/Profile';

const Information = ({ activityTime }) => {
	return (
		<div className="sticky top-10">
			<Profile />
			<AddBreak />
			<ActivityDetails activityTime={activityTime} />
		</div>
	);
};

export default Information;
