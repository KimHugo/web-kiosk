import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import FirstFloor from "./pages/FirstFloor";
import SecondFloor from "./pages/SecondFloor";
import ThirdFloor from "./pages/ThirdFloor";
import RoomComponent from "./components/RoomComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/1f",
        element: <FirstFloor />,
      },
      {
        path: "/room/:roomId",
        element: <RoomComponent />
      }
      ,
      {
        path: "/2f",
        element: <SecondFloor />,
      },
      {
        path: "/3f",
        element: <ThirdFloor />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
