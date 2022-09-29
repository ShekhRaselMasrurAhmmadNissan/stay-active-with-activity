import React from 'react';

const AddBreak = ({ handleAddBreak }) => {
	return (
		<div className="mt-8 mx-1 py-4 text-black bg-white rounded-md">
			<h1 className="text-xl font-semibold ml-4">Add Break:</h1>
			<div className="flex justify-evenly">
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e)}
				>
					5
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e)}
				>
					10
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e)}
				>
					20
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e)}
				>
					30
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e)}
				>
					45
				</button>
			</div>
		</div>
	);
};

export default AddBreak;
