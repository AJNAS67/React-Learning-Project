import React from "react";
const weekDays = [
  { day: "Tue", date: "26", attendance_status: "", currentDate: "26/12/2023" },
  { day: "Wed", date: "27", attendance_status: "", currentDate: "27/12/2023" },
  { day: "Thu", date: "28", attendance_status: "", currentDate: "28/12/2023" },
  { day: "Fri", date: "29", attendance_status: "", currentDate: "29/12/2023" },
  { day: "Sat", date: "30", attendance_status: "", currentDate: "30/12/2023" },
  { day: "Sun", date: "31", attendance_status: "", currentDate: "31/12/2023" },
  { day: "Mon", date: "01", attendance_status: "", currentDate: "01/01/2024" },
];
const myAbsent = false;
const todaysDay = new Date().getDate();
function StudentDashboard() {
  console.log(todaysDay, "today");
  return (
    <div>
      <div class="container-fluid">
        <div class="row wall-container">
          <div class="col-12 col-md-7 col-xxl-7 content-wrap">
            <h1 class="heading-1-medium mob-block">Dashboard</h1>
            <div class="row infocard-box pt-2">
              <div class="col-12 col-md-6">
                <div class="card-info color-5">
                  <div class="content">
                    <span>30/07/1998</span>
                    <div class="deatils">
                      <h2>Homeworks</h2>
                      <h2>1 New</h2>
                    </div>
                    <div class="subject-box">
                      <a class="color-2" matTooltip="Science">
                        <img src="images/dashboard/subject-thumb-science.svg"></img>
                      </a>
                      <a class="color-3" matTooltip="Language">
                        <img src="images/dashboard/subject-thumb-language.svg"></img>
                      </a>
                      <a class="color-4" matTooltip="Geography">
                        <img src="images/dashboard/subject-thumb-geography.svg"></img>
                      </a>
                      <a class="color-5" matTooltip="English">
                        <img src="images/dashboard/subject-thumb-english.svg"></img>
                      </a>
                      <a class="color-7" matTooltip="Maths">
                        <img src="images/dashboard/subject-thumb-maths.svg"></img>
                      </a>
                    </div>
                  </div>
                  <img
                    class="card-info-thumb"
                    src="images/dashboard/homework_img.svg"
                  ></img>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card-info color-2">
                  <div class="content">
                    <span>30/7/1998</span>
                    <div class="deatils">
                      <h2>Assignments</h2>
                      <h2>3 New</h2>
                    </div>
                    <div class="subject-box">
                      <a class="color-2" matTooltip="Science">
                        <img src="images/dashboard/subject-thumb-science.svg"></img>
                      </a>
                      <a class="color-3" matTooltip="Language">
                        <img src="images/dashboard/subject-thumb-language.svg"></img>
                      </a>
                      <a class="color-4" matTooltip="Geography">
                        <img src="images/dashboard/subject-thumb-geography.svg"></img>
                      </a>
                      <a class="color-5" matTooltip="English">
                        <img src="images/dashboard/subject-thumb-english.svg"></img>
                      </a>
                      <a class="color-7" matTooltip="Maths">
                        <img src="images/dashboard/subject-thumb-maths.svg"></img>
                      </a>
                    </div>
                  </div>
                  <img
                    class="card-info-thumb"
                    src="images/dashboard/assignment_img.svg"
                  ></img>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="heading-2-medium">Calendar</h2>
              </div>
              <div class="col-12 col-md-8 ">
                {/* <div class="ss-card loadingAttendance">
                  <label class="d-block text-center my-3">
                    No Attendance updated
                  </label>
                </div> */}
                <div class="week-calendar ">
                  {weekDays.map((week, i) => (
                    <a
                      className={`{day ${todaysDay}==${week.day}?'active'} : ${week.attendance_status}=='absent' ?'holiday'`}
                      key={i}
                    >
                      <h4>
                        {week.day}
                        <br />
                        {week.date}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="attendance-status notTaken">
                  <h5>
                    28<sup>th</sup> Dec 2023
                  </h5>

                  <h2 class="upp-text">Not Taken</h2>
                </div>
              </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h2 class="heading-2-medium">Timetable</h2>
                </div>
                <div class="col-12">
                  <div class="ss-card loadingPeriods">
                    <label class="d-block text-center my-3 no-timetable">
                        
                        <img src="images/dashboard/no timetable.png" alt=""></img>
                        No Timetable updated</label>
                  </div>
                    {/* <div class="timetable-wrapper " >

                        <div *ngFor="let one of myPeriods;let j=index;let last=last" class="single-subject">
                            <div class="period {{+(one?.end.split(':')[0])>date.split(':')[0]?'':'disable'}} {{last?'timetable-line':''}}" >
                                <label class="period-label">P.{{one.period_name.split(' ')[1]}}</label>
                                <span class="{{(j==0)?'color-2':(j==1)?'color-3':(j%2==0)?'color-7':'color-4'}}"><img
                                        src="images/dashboard/subject-thumb-science.svg"></span>
                                <label >{{one.subject}}</label>
                                <!-- {{+(one?.end.split(':')[0])}}
                                {{date.split(':')[0]}} -->

                            </div>
                        </div> */}



                    </div>
                </div>
                

                
            </div>

          </div>
        </div>
      </div>
    
  );
}
export default StudentDashboard;
