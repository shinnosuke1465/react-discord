import React, { useEffect } from "react";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "./app/hooks";
// import Chat from "./components/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallBack";

function App() {
  const user = useAppSelector((state) => state.user.user);
  // console.log(user);
  const dispatch = useAppDispatch(); //下記の関数の中で使う

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { //onAuthStateChanged()...認証状態が変わったら(ログインしたら)関数実行
      console.log(authUser);
      if (authUser) { //ログインユーザーがいたら
        dispatch( //hooksのdispatch関数を使ってreduxのstoreに通知
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);  //通知を出すたびuseEffectの中身を発火

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* <Suspense fallback={<div>...Loading</div>}> */}
            <Sidebar />
            {/* </Suspense> */}
          </ErrorBoundary>
          {/* home */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
