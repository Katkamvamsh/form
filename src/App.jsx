import './App.css';
import CreditCard from './components/CreditCard/CreditCard';
import Login from './components/Login/Login';
import Registration from './components/Registartion/Registration';
import Protectedroute from './components/Protectedroute/Protectedroute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Route Wrapper */}
        <Route element={<Protectedroute />}>
          <Route path='/creditCard' element={<CreditCard />} />
          </Route>
       {/* <Route> inside is route componented wrap which is needed to proteced if not
       autherised
       </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
