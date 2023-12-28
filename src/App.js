import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./components/login-page/login";
import SideNav from "./components/shared-component/side-nav";
// import {BrowserRouter,Routers,Route} from 'react-router-dom'
import { BrowserRouter , Route, Routes ,Navigate} from "react-router-dom";
import StudentTimeTable from "./components/student/student-timetable";
import StudentDashboard from "./components/student/student-dashboard";
import BarcodeFn from "./components/barcode/barcode";
import StudentResult from "./components/student/student-result";

function App() {
  const isLogged=localStorage.getItem('isLoggned')
  return (
    <div className="App">
      <div>
        {/* <LoginComponent></LoginComponent> */}
        <BrowserRouter>
         { isLogged ? <SideNav/>:null}
            <Routes>
            <Route path="/" element={isLogged ? <StudentDashboard /> : <Navigate to="/login" />}></Route>
           
              <Route path="/dashboard" element={<StudentDashboard />}></Route>
              <Route path="/payment" element={<StudentDashboard />}></Route>
              <Route path="/barcode" element={<BarcodeFn />}></Route>
              <Route path="/result" element={<StudentResult />}></Route>

              
              <Route path="/message" element={<StudentDashboard />}></Route>
              <Route path="/timetable" element={<StudentTimeTable />}></Route>
              <Route path="/login" element={<LoginComponent />}></Route>

            </Routes>
          
        </BrowserRouter>
        {/* <Barcode></Barcode> */}
      </div>
    </div>
  );
}

export default App;
