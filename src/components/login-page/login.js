import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
const loginidUser = [
  { username: "ajnas@gmail.com", password: "aj" },
  { username: "hareesh@gmail.com", password: "hareesh" },
  { username: "ranjith@bay", password: "ranjith" },
  { username: "aju", password: "aju" },
  { username: "7406401368", password: "7406401368" },
];

function LoginComponent({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);

  const navigate = useNavigate();

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
  const getUserDetails = async () => {
    await axios.post(`/web/dataset/call`, {
      params: {
        model: "ss.student",
        method:"get_student_profile",
        args: [2909],
      },
    });
  };

  const loginSetDb = async () => {
    await axios
      .post(`/web/session/login`, {
        params: { db: "dpirs", login: "7406401368", password: "7406401368" },
      })
      .then((data) => {
        console.log(data?.result, "data?.result?.session_id");
        localStorage.setItem("smart_session", data?.result?.session_id);
        // localStorage.setItem(
        //   "studentArray",
        //   JSON.stringify(data,'.stu_lst')
        // );
        localStorage.setItem("userType", data?.result?.user_type);
        const check = localStorage.getItem("userType");
      })
      
  };
  const handleLogin = async () => {
    const check = checkCredentials(username, password);
    if (check) {
      setLogin(true);
      // localStorage.setItem('isLoggned')
      localStorage.setItem("isLoggned", true);
      await loginSetDb();
      await getUserDetails()
      showToaster("success", "Logged successfully");
      onLogin(true)
      navigate("/dashboard");
    } else {
      localStorage.setItem("isLoggned", false);

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
