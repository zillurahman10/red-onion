import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Breakfast from './Pages/Home/Meals/Breakfast/Breakfast';
import Dinner from './Pages/Home/Meals/Dinner/Dinner';
import Lunch from './Pages/Home/Meals/Lunch/Lunch';
import Login from './Pages/Login/Login';
import MealsDetails from './Pages/MealsDetails/MealsDetails';
import SignUp from './Pages/SignUp/SignUp';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path="/breakfast/:id" element={<MealsDetails></MealsDetails>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
