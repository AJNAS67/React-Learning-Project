import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./components/login-page/login";
import SideNav from "./components/shared-component/side-nav";
// import {BrowserRouter,Routers,Route} from 'react-router-dom'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Router,
} from "react-router-dom";
import StudentTimeTable from "./components/student/student-timetable";
import StudentDashboard from "./components/student/dashboard/student-dashboard";
import BarcodeFn from "./components/barcode/barcode";
import StudentResult from "./components/student/student-result";
import { useEffect, useState } from "react";
import Accordian from "./components/accordian/accordian";
import RandomColor from "./components/random-color/Random-color";
import StarRating from "./components/star-rating/starRating";
import ImageSlider from "./components/image-slider/imageSlider";
import JioMeet from "./components/JioMeet/jioMeet";
import Videosdk from "./components/videosdk-live/Videosdk";
import JioMeet1 from "./components/JioMeet/JioMeet1";
import SearchAutocomplete from "./components/search-autocomplete-with-api/index";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context/index.js";
import FeatureFlags from "./components/feature-flag/index.js";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  // const isLogged=localStorage.getItem('isLoggned')
  const handleLogin = (value) => {
    console.log("value", value);
    setIsLogged(value);
    localStorage.setItem("isLoggned", true);
  };
  const handleLogout = (value) => {
    setIsLogged(value);
    localStorage.setItem("isLoggned", false);
  };
  // useEffect(()=>{
  //   console.log(isLogged,'use effect');
  //   setIsLogged(localStorage.getItem("isLoggned"))

  // },[isLogged])
  return (
    <div className="App">
      <div>
        {/* <LoginComponent></LoginComponent> */}
        <BrowserRouter>
          {isLogged ? <SideNav handleLogout={handleLogout} /> : null}
          <Routes>
            <Route
              path="/"
              element={
                isLogged ? <StudentDashboard /> : <Navigate to="/login" />
              }
            ></Route>

            <Route path="/dashboard" element={<StudentDashboard />}></Route>
            <Route path="/payment" element={<StudentDashboard />}></Route>
            <Route path="/barcode" element={<BarcodeFn />}></Route>
            <Route path="/result" element={<StudentResult />}></Route>

            <Route path="/message" element={<StudentDashboard />}></Route>
            <Route path="/timetable" element={<StudentTimeTable />}></Route>
            <Route
              path="/login"
              element={<LoginComponent onLogin={handleLogin} />}
            ></Route>
            <Route path="/accordian" element={<Accordian />}></Route>
            <Route path="/random-color" element={<RandomColor />}></Route>
            <Route path="/star-rate" element={<StarRating />}></Route>
            <Route path="/jio-meet" element={<JioMeet />}></Route>
            <Route path="/jio-meet1" element={<JioMeet1 />}></Route>

            <Route path="/video-sdk" element={<Videosdk />}></Route>

            <Route
              path="/image-slider"
              element={
                <ImageSlider
                  url={"https://picsum.photos/v2/list"}
                  page={"1"}
                  limit={"10"}
                />
              }
            ></Route>
            <Route path="search-auto" element={<SearchAutocomplete />}></Route>
            <Route path="sos" element={<TicTacToe />}></Route>
            <Route
              path="feature-flags"
              element={
                <FeatureFlagGlobalState>
                  <FeatureFlags></FeatureFlags>
                </FeatureFlagGlobalState>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <Barcode></Barcode> */}
      </div>
    </div>
  );
}

export default App;
