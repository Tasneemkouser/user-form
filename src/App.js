import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import UserForm from './userForm';
import {NavBar} from './components/NavBar';
import UserList from './components/UserList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <NavBar />
      <Routes>
      <Route path = "/list" element ={ <UserList />}/>
      <Route path = "/add" element = {<UserForm />}/>
      </Routes>
      
    </LocalizationProvider>
    </BrowserRouter>
     
  );
}

export default App;
