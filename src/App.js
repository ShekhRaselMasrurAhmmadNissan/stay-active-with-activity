import './App.css';
import Blogs from './Components/Blogs/Blogs';

import Home from './Components/Home/Home';

function App() {
	return (
		<div className="App">
			<Home />
			<div className="divider mt-10 w-[85%] mx-auto"></div>
			<Blogs />
		</div>
	);
}

export default App;
