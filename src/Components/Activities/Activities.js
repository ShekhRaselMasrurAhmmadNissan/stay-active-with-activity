import React from 'react';
import SingleActivity from '../SingleActivity/SingleActivity';

const Activities = ({ activities }) => {
	return (
		<div className="grid grid-cols-3 gap-y-6 mt-7">
			{activities.map((activity) => (
				<SingleActivity key={activity.id} activity={activity} />
			))}
		</div>
	);
};

export default Activities;
