import React from 'react';

const Blogs = () => {
	return (
		<div className="my-10 mx-8">
			<h1 className="text-center text-4xl font-bold text-white mb-4">
				Blogs
			</h1>

			<div className="collapse rounded-lg mb-5">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-white text-black font-bold text-3xl">
					How does react works?
				</div>
				<div className="collapse-content bg-gray-200 text-black text-2xl ">
					<p>
						ReactJS is a library of JS that mainly used for
						front-end development. It divides the UI into smallest
						reusable parts that are known as components.
						<br />
						It has it's own Virtual DOM Tree Representation. Similar
						to JS DOM tree Representation. But after a single change
						the JS DOM Tree takes too much time to rerender. where
						the React first apply the changes on its virtual DOM
						Tree then check with the Existing DOM to catch the
						changes. After finding the changes React just rerender
						only the changeable parts.
					</p>
				</div>
			</div>

			<div className="collapse rounded-lg mb-5">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-white text-black font-bold text-3xl">
					What are the differences between PROPS and STATE in ReactJS
					?
				</div>
				<div className="collapse-content bg-gray-200 text-black text-2xl ">
					<p>
						PROPS is used to pass data from one component to another
						for further usage. While the STATE is used to keep track
						of the values that can changed by the User interactions
						and will affect the UI depending on that variable.
						<br />
						PROPS is immutable, it can not be changed. We can use
						the value to do operations with the help of them. But we
						cannot change the value. On the other hand, STATE is
						mutable. We can change the value of STATE but not
						directly. If we want to change the value of STATE then
						we need to use a special function that comes with the
						STATE variable at the time of Declaration.
					</p>
				</div>
			</div>

			<div className="collapse rounded-lg mb-5">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-white text-black font-bold text-3xl">
					What Does useEffect do in ReactJS ?
				</div>
				<div className="collapse-content bg-gray-200 text-black text-2xl ">
					<p>
						The main task of useEffect is to use the effect of the
						changes in the website. It helps to load data from the
						API/Database. But it has more works too. We can simply
						use it to inform our code to use the effect of the
						variables that are declared in the dependency array of
						the useEffect function to do some task. Sometimes the
						tasks are to load data or sometimes to change some
						variables or change the state. It simply runs while the
						website takes a reload but if we declare any dependency
						then the function will run if any of the dependency
						values changes.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
