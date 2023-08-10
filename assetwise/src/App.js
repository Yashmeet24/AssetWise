
import Loginpage from './Loginpage';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
