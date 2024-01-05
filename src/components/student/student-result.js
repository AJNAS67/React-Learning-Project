import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";

const exam_term = [
  {
    id: 4,
    name: "1st MID SEMESTER EXAMINATION",
  },
  {
    id: 7,
    name: "I SEMESTER EXAMINATION",
  },
  {
    id: 12,
    name: "I REVISION EXAMINATION",
  },
];
let exam_term1;

function StudentResult() {
  const [exame_result,setExame]=useState([])
  useEffect(() => {
    exameDetails();
  }, []);
  const exameDetails = async () => {
    let student_id = localStorage.getItem("studentId") || "";
    console.log(student_id,'student id');

    // 2909
    let input = {
      params: {
        model: "ss.student",
        method: "exam_term_list",
        args: [2909],
        kwargs: { offset: 0, limit: 8 },
      },
    };
    await axios.post(`/web/dataset/call_kw`, input).then((res) => {
      console.log(res.data.result.exam_term,'res.result');
      let   exam_term1=res.data.result.exam_term
      setExame(exam_term1)
      console.log(res.result, "resylt responce");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="content-wrap">
            <div className="row">
              <div className="col-md-11 col-12 mx-auto">
                <div className="col-12">
                  <h2 className="heading-4-medium">
                    Check out your latest performance on - Mathematics
                  </h2>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-4">
                    <div className="ss-card newtask-box rank-card mark color-3">
                      <div className="rank-icon">
                        <img src="images/grade.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="heading-5-regular">Total Marks</h6>
                        <h3 className="heading-2-semibold">1900</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-3 col-lg-4">
                    <div className="ss-card newtask-box rank-card perc color-2">
                      <div className="rank-icon">
                        <img src="images/percent-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="heading-5-regular">Percentage</h6>
                        <h3 className="heading-2-semibold">90 %</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-3 col-lg-4">
                    <div className="ss-card newtask-box rank-card stat color-7">
                      <div className="rank-icon">
                        <img src="images/military-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6 className="heading-5-regular">Status</h6>
                        <h3 className="heading-2-semibold text-uppercase">
                          A+
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="spin-loader">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div> */}

                <div className="col-12">
                  <h2 className="heading-2-medium color-1">
                    Academic Year 2025
                  </h2>
                </div>
                <div
                  className="examList"
                  style={{
                    height: "calc(100vh - 310px) ",
                    "overflow-y": "scroll",
                  }}
                >
                  {/* <div  className="col-12">
      <a
                className="ss-card academic-list"
                
              >
                <h5 className="heading-5-regular">ajnas</h5>
                <span className="material-symbols-outlined"> open_in_new </span>
              </a>
              <a
                className="ss-card academic-list"
                
              >
                <h5 className="heading-5-regular">ajnas</h5>
                <span className="material-symbols-outlined"> open_in_new </span>
              </a>

        
      </div> */}

                  {exame_result.map((term) => (
                    <a
                      key={term.id}
                      className="ss-card academic-list"
                      href={`#/${term.id}`} // You can replace this with the actual URL or link you want
                    >
                      <h5 className="heading-5-regular">{term.name}</h5>
                      <span className="material-symbols-outlined">
                        {" "}
                        open_in_new{" "}
                      </span>
                    </a>
                  ))}

                  {/* <div className="col-12" *ngFor="let one of myArray; let i = index">
              <a
                className="ss-card academic-list"
                
              >
                <h5 className="heading-5-regular">{{ one?.name }}</h5>
                <span className="material-symbols-outlined"> open_in_new </span>
              </a>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentResult;
