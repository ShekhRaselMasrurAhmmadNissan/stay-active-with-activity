import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import AddBreak from '../AddBreak/AddBreak';
import Profile from '../Profile/Profile';

const Information = () => {
	return (
		<div className="sticky top-10">
			<Profile />
			<AddBreak />
			<ActivityDetails />
		</div>
	);
};

export default Information;
