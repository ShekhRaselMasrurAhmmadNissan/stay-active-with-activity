import React from 'react';
import { act } from 'react-dom/test-utils';

const SingleActivity = ({ activity }) => {
	const { id, picture, title, about, requiredTime } = activity;
	console.log(activity);
	return (
		<div className="card w-[350px] bg-white text-black shadow-xl">
			<figure>
				<img src={picture} alt="Shoes" className="h-64 w-full" />
			</figure>
			<div className="card-body">
				<h2 className="card-title font-bold text-blue-700">{title}</h2>
				<p>{about}</p>
				<hr />
				<p className="font-medium text-blue-700">
					Time Required: {requiredTime} minute
				</p>
				<hr />
				<div className="card-actions justify-end">
					<button className="py-1 px-2 bg-emerald-300 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white duration-500">
						Add To List
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleActivity;