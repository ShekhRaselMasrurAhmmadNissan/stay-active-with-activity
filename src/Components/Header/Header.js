import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
	return (
		<div className="py-2 px-8 flex justify-center">
			<a href="/" className="flex items-center gap-6">
				<FontAwesomeIcon
					icon={faBookReader}
					className="w-9 h-9 text-white"
				></FontAwesomeIcon>
				<h2 className="text-info text-xl text-center md:text-4xl font-bold uppercase">
					Stay Active with Activities
				</h2>
			</a>
		</div>
	);
};

export default Header;
