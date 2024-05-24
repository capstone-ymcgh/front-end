import './App.css';
import LoginPage from './Page/LoginPage/LoginPage';
import FristPage from './Page/FristPage/FristPage';
import MainPage from './Page/MainPage/MainPage';
import RecipePage from './Page/recipePage/recipePage';
import FimdId from './Page/LoginPage/FindId';
import Findpw from './Page/LoginPage/FIndPW'; // Findpw import // Findpw import
import NewPage from './Page/NewPage'; // NewPage import
import RecipeBlog from './Page/recipeblog/recipeblog'; // RecipeBlog import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Page/LoginPage/SignupPage';
import Slide from './Page/MainPage/Slide';
import Recipe from './Page/recipe/recipe'; 
import UserInfo from './Page/UserInfo/UserInfo';
import Dietcalendar from './Page/Dietcalendar/Dietcalendar'; // Dietcalendar import
import CalendarPage from './Page/CalendarPage/CalendarPage'; // CalendarPage import
import SalePage from './Page/SalePage/SalePage';
import SaleItem from './Page/SalePage/saleItem';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consumer from './Page/SalePage/consumer';
import CheckoutPage from './Page/SalePage/checkout';
// Findpw import



import Dietcalendar2_24_05_21 from './Page/Dietcalendar/Dietcalendar2_24_05_21';
import Dietcalendar1_24_05_21 from './Page/Dietcalendar/Dietcalendar1_24_05_21';
import CalendarPage_24_05_21 from './Page/CalendarPage/calendar_24_05_21';
function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/saleitem" element={<SaleItem />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/findpw" element={<Findpw />} /> {/* Add this line */}
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/dietcalendar" element={<Dietcalendar />} />
            <Route path="/slide" element={<Slide />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/" element={<FristPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/recipePage" element={<RecipePage />} />
            <Route path="/recipeblog" element={<RecipeBlog />} /> {/* Add this line */}
            <Route path="/findid" element={<FimdId />} />






            <Route path="/dietcalendar1_24_05_21" element={<Dietcalendar1_24_05_21 />} />
            <Route path="/dietcalendar2_24_05_21" element={<Dietcalendar2_24_05_21 />} />
            <Route path="/calendar_24_05_21" element={<CalendarPage_24_05_21 />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;