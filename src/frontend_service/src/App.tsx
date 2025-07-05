import { RouterProvider } from 'react-router';
import router from './routers/router';
import './App.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;