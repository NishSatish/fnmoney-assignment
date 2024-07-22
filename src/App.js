import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
], {
  basename: '/fnmoney-assignment'
});
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
