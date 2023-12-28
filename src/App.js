import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./components/login-page/login";
import SideNav from "./components/shared-component/side-nav";
// import {BrowserRouter,Routers,Route} from 'react-router-dom'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import StudentTimeTable from "./components/student/student-timetable";
import StudentDashboard from "./components/student/student-dashboard";

function App() {
  return (
    <div className="App">
      <div>
        {/* <LoginComponent></LoginComponent> */}
        <BrowserRouter>
          <SideNav>
            <Routes>
              <Route path="/dashboard" element={<StudentDashboard />}></Route>
              <Route path="/payment" element={<StudentDashboard />}></Route>
              <Route path="/message" element={<StudentDashboard />}></Route>
              <Route path="/timetable" element={<StudentTimeTable />}></Route>
            </Routes>
          </SideNav>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
