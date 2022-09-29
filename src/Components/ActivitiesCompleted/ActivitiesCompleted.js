import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivitiesCompleted = ({ clearAllSavedData }) => {
	const activitiesStatusHandle = () => {
		toast('You Have Completed The Activities Successfully!');
		clearAllSavedData();
	};
	return (
		<div className="text-center mt-8">
			<button
				className="py-1 px-2 rounded-lg text-2xl font-semibold text-black bg-blue-500"
				onClick={activitiesStatusHandle}
			>
				Activities Completed
			</button>
			<ToastContainer position="top-center" />
		</div>
	);
};

export default ActivitiesCompleted;
