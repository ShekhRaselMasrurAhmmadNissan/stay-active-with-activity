import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Activities = ({ activities, handleRequiredTime }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-y-6 mt-7">
			{activities.map((activity) => (
				<SingleActivity
					key={activity.id}
					activity={activity}
					handleRequiredTime={handleRequiredTime}
				/>
			))}
		</div>
	);
};

export default Activities;
