import React from 'react';

const AddBreak = ({ handleAddBreak }) => {
	return (
		<div className="mt-8 mx-1 py-4 text-black bg-white rounded-md">
			<h1 className="text-xl font-semibold ml-4">
				Add Break: <small className="text-emerald-700">(minutes)</small>
			</h1>
			<div className="flex justify-evenly">
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e.target.innerText)}
				>
					5
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e.target.innerText)}
				>
					10
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e.target.innerText)}
				>
					20
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e.target.innerText)}
				>
					30
				</button>
				<button
					className="h-10 w-10 flex items-center justify-center text-lg border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300"
					onClick={(e) => handleAddBreak(e.target.innerText)}
				>
					45
				</button>
			</div>
		</div>
	);
};

export default AddBreak;
