import { Routes, Route } from 'react-router-dom';
import RegisterKaro from './layout/header';
import '../src/App.css'


function App() {
  return (
    <div className="App">
              <Routes>
            <Route path="/" element={<RegisterKaro />} />
            
         </Routes>

    </div>
  );
}

export default App;
