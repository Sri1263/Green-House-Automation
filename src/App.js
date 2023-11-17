import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Temperature from './Components/Temperature';
import Moisture from './Components/Moisture';
import AQ from './Components/AQ';

function App() {
  return (
	<div className="App">
	  <BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage/>} />
			<Route path='/moisture' element={<Moisture/>} />
			<Route path='/temperature' element={<Temperature/>} />
			<Route path='/aq' element={<AQ/>} />
		</Routes>
	  </BrowserRouter>
	</div>
  );
}

export default App;
