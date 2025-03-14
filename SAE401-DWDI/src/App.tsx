import { Routes, Route } from 'react-router-dom';
import Login from './ui/Login';
import Register from './ui/Register';
import RequestReset from './ui/RequestReset';
import ResetPassword from './ui/ResetPassword';
import Profile from './/ui/Profile';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<RequestReset />} />
      <Route path="/reset-password/new" element={<ResetPassword />} />
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;


