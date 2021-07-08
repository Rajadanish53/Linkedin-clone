import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { UserLogin } from "./redux/user";
function Login() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const logintoApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
 
        dispatch(
          UserLogin({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              UserLogin({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
        alt=""
      />
      <form action="">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button onClick={logintoApp}>Sign In</button>
      </form>
      <p>
        not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
