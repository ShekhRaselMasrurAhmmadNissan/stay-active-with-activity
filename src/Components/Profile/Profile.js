import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Profile = () => {
	return (
		<div>
			<div className="mt-8 mx-1 py-2 text-black bg-white rounded-md">
				<div className="flex gap-1">
					<img
						src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
						alt=""
						className="mask mask-hexagon w-20 h-20"
					/>
					<div className="">
						<h1 className="text-xl font-bold text-teal-400">
							Shekh Rasel Masrur Ahmmad
						</h1>
						<small>
							<FontAwesomeIcon
								icon={faMapMarked}
								className="mr-2"
							></FontAwesomeIcon>
							Dhaka, Bangladesh
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
