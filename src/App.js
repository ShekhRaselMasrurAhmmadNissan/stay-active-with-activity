import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<div className="App">
			<h1>
				<p>Hello</p>{' '}
				<FontAwesomeIcon
					icon={faBookReader}
					className="w-8 h-8 text-blue-500"
				></FontAwesomeIcon>
			</h1>
		</div>
	);
}

export default App;
