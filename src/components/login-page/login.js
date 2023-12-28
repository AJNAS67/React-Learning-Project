import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const loginidUser = [
  { username: "ajnas@gmail.com", password: "aj" },
  { username: "hareesh@gmail.com", password: "hareesh" },
  { username: "ranjith@bay", password: "ranjith" },
  { username: "aju", password: "aju" },
];

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);

  const checkCredentials = (enteredUsername, enteredPassword) => {
    // Iterate over the loginUserData array
    for (const user of loginidUser) {
      if (
        user.username === enteredUsername &&
        user.password === enteredPassword
      ) {
        return true; // Credentials are correct
      }
    }
    return false; // No match found
  };

  const handleLogin = () => {
    const check = checkCredentials(username, password);
    if (check) {
      setLogin(true);
      showToaster("success", "Logged successfully");
    } else {
      setLogin(false);
      showToaster("error", "invalid username and password");
    }
  };

  function showToaster(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
  }

  return (
    <div class="login-wrap">
      <div class="login-section left">
        <div class="login-img-wrap">
          <div class="login-image">
            <img src="images/login/login-computer.svg" alt="" />
            <img
              src="images/login/login-img-messege.svg"
              alt=""
              class="login-img-messege"
            />
            <img
              src="images/login/login-img-profile.svg"
              alt=""
              class="login-img-profile"
            />
            <img
              src="images/login/login-img-subject.svg"
              alt=""
              class="login-img-subject"
            />
          </div>
          <h1 class="heading-1-medium">
            Entire School Operations <br />
            <b> Under One Roof ✍🏻 🏫</b>
          </h1>
        </div>
      </div>
      <div class="login-section right">
        <div class="login-head">
          <h1>Welcome to</h1>
          <h1 class="head-bold">Smart School Pro</h1>
        </div>

        <form class="login-body">
          <div class="form-group">
            <label for="user-name">Username</label>
            <input
              type="text"
              id="user-name"
              placeholder="Enter User Name"
              autocomplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>User Name is Required</span>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              formControlName="password"
              placeholder="Enter your Password"
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password is Required</span>
          </div>
          <div class="remember-section">
            <div class="remember-wrap">
              <input
                type="checkbox"
                name=""
                id="remember"
                formControlName="rememberMe"
              />
              <label for="remember" class="remember">
                Remember me
              </label>
            </div>
            <div class="remember-wrap">
              <a>Forgot Password?</a>
            </div>
          </div>
          <div class="login-user" onClick={handleLogin}>
            <a class="login-btn-tab colored" type="button">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
