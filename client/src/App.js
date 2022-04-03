import {Route,Routes} from 'react-router-dom'
import Error from './views/Error';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
