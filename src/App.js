import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets"
import "./App.css";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { UserLogout, UserLogin } from "./redux/user";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          UserLogin({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.profilePic,
          })
        );
      } else {
        dispatch(UserLogout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

    
    </div>
  );
};

export default App;
