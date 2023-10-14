import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import FirstFloor from './pages/FirstFloor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/1f",
        element: <FirstFloor />

      }


    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
