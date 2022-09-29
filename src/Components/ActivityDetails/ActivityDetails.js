import React from 'react';

const ActivityDetails = ({ activityTime, breakTime }) => {
	return (
		<div className="mt-8 mx-1 py-4 text-black bg-white rounded-md">
			<h1 className="text-xl font-semibold ml-2">Activity Details</h1>
			<p className="bg-gray-100 py-2 m-1 px-1 rounded-md text-blue-600">
				Required Time For Activity: {activityTime}
				<small className="text-black">minutes</small>
			</p>
			<p className="bg-gray-100 py-2 m-1 px-1 rounded-md text-blue-600">
				Break Time: {breakTime}
				<small className="text-black">minutes</small>
			</p>
		</div>
	);
};

export default ActivityDetails;
