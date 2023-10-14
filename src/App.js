import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import FirstFloor from "./pages/FirstFloor";
import SecondFloor from "./pages/SecondFloor";
import ThirdFloor from "./pages/ThirdFloor";
import RoomComponent from "./components/RoomComponent";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

  // const history = useHistory();

  // 일정 시간 동안 이벤트가 없을 경우 홈 페이지로 이동하는 함수
  const goToHomePage = () => {
    window.location.pathname = "/"
  };

  // useEffect(() => {
  //   let timeoutId;

  //   // 모든 이벤트에 대한 이벤트 리스너를 추가합니다.
  //   const eventListener = () => {
  //     clearTimeout(timeoutId); // 이전 타이머를 취소합니다.
  //     timeoutId = setTimeout(goToHomePage, 10000); // 60,000 밀리초(1분) 동안 이벤트가 없을 경우 홈 페이지로 이동합니다.
  //   };

  //   // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
  //   window.addEventListener('mousemove', eventListener);
  //   window.addEventListener('keydown', eventListener);
  //   window.addEventListener('click', eventListener);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
  //   return () => {
  //     window.removeEventListener('mousemove', eventListener);
  //     window.removeEventListener('keydown', eventListener);
  //     window.removeEventListener('click', eventListener);
  //     clearTimeout(timeoutId); // 컴포넌트가 언마운트될 때 이전 타이머를 취소합니다.
  //   };
  // }, []);
  const [userActivity, setUserActivity] = useState(false); 

  useEffect(() => {
    let timeoutId;

    // 사용자 활동이 있을 때마다 타이머를 리셋합니다.
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(goToHomePage, 60000); // 60,000 밀리초(1분) 동안 활동이 없을 경우 홈 페이지로 이동합니다.
    };

    // 사용자 활동 이벤트 리스너를 추가합니다.
    const activityListener = () => {
      setUserActivity(true); // 사용자 활동이 있음을 표시합니다.
      resetTimer(); // 사용자 활동이 있을 때 타이머를 리셋합니다.
    };

    // 초기화
    resetTimer();

    // 컴포넌트가 마운트될 때 사용자 활동 이벤트 리스너를 추가합니다.
    window.addEventListener('mousemove', activityListener);
    window.addEventListener('touchmove', activityListener);
    window.addEventListener('keydown', activityListener);
    window.addEventListener('click', activityListener);

    // 컴포넌트가 언마운트될 때 사용자 활동 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('mousemove', activityListener);
      window.removeEventListener('touchmove', activityListener);
      window.removeEventListener('keydown', activityListener);
      window.removeEventListener('click', activityListener);
      clearTimeout(timeoutId);
    };
  }, []);

  


  return <RouterProvider router={router} />;
}

export default App;
