import React from "react";
import DateCalendarFormProps from "./calendar";
import OnlineClassCard from "./online-class-card";

// import OwlCarousel from "./owl-carousel";
import OwlCarouselFunc from "./owl-carousel";
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
                    No Timetable updated
                  </label>
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

            <div class="row" style={{ opacity: "0.7" }}>
              <div class="col-12 with-btn">
                <h2 class="heading-2-medium">Dialy Nots</h2>
              </div>
              <OwlCarouselFunc></OwlCarouselFunc>
            </div>

            <div class="row" style={{ opacity: "0.6" }}>
              <div class="col-12 with-btn">
                <h2 class="heading-2-medium">Online Class</h2>
              </div>

              <OnlineClassCard></OnlineClassCard>
            </div>
          </div>

          <div class="col-12 col-md-4 col-xxl-4 content-wrap">
            <div class="ss-card">
              <div class="dashboard-profile">
                <img
                  src="images/Asia Woman 1.svg"
                  alt=""
                  class="profile-pic"
                ></img>

                <h3 class="heading-3-semibold">Muhammed Ajans</h3>
                <h5 class="heading-5-regular">Class: XII ISC COM-A</h5>
                <h5 class="heading-5-semibold">Male</h5>

                <div class="attendance">
                  <h4 class="heading-4-semibold">
                    100<br></br>
                    <span>Total Days</span>
                  </h4>

                  <h4 class="heading-4-semibold">
                    10<br></br>
                    <span>Present</span>
                  </h4>

                  <h4 class="heading-4-semibold">
                    90<br></br>
                    <span>Absent</span>
                  </h4>
                </div>

                <p>
                  Ajnas, you are{" "}
                  <strong className="text-danger">NOT SAFE</strong> and not on
                  track
                </p>

                <div class="progress-stacked">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Segment one"
                    aria-valuenow="62"
                    aria-valuemin="0"
                    aria-valuemax="77"
                    style={{ width: "100%", backgroundColor: "#F75961" }}
                  >
                    <div
                      className="progress-bar "
                      style={{
                        backgroundColor: "#32936F",
                        transition: "1s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div class="notification-sec">
                <h4 class="heading-4-medium">Payments</h4>
                <div class="paymet-box color-1">
                  <div class="content">
                    <h5 class="heading-5-regular">Due to be paid</h5>
                    <h3 class="heading-3-bold">₹1000</h3>
                  </div>
                  <div class="btn-box">
                    <a
                      class="btn-ss"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      {" "}
                      PAY NOW
                    </a>
                  </div>
                </div>
              </div>

              <div class="notification-sec">
                <h4 class="heading-4-medium">Academic Calender</h4>
                <DateCalendarFormProps></DateCalendarFormProps>
              </div>
            </div>
          </div>
        </div>

        {/* ..... */}

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          {/* <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">
                  Select a Method:
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <mat-radio-group>
                  <mat-radio-button class="example-margin" value="Paytm">
                    Paytm
                  </mat-radio-button>
                  <mat-radio-button class="example-margin" value="EcbUzz">
                    EcbUzz
                  </mat-radio-button>
                </mat-radio-group>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default StudentDashboard;
