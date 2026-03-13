import React, { useState } from "react";
import StudentInfo from "./StudentInfo";
import SubjectRow from "./SubjectRow";
import ResultSummary from "./ResultSummary";
import "./Style.css";

function Marksheet() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");

  const [subjects, setSubjects] = useState([
    { id: 1, subject: "", marks: "" },
    { id: 2, subject: "", marks: "" },
    { id: 3, subject: "", marks: "" },
    { id: 4, subject: "", marks: "" },
  ]);

  const [show, setShow] = useState(false);

  const handleSubject = (id, value) => {
    setSubjects(
      subjects.map((s) =>
        s.id === id ? { ...s, subject: value } : s
      )
    );
  };

  const handleMarks = (id, value) => {
    setSubjects(
      subjects.map((s) =>
        s.id === id ? { ...s, marks: value } : s
      )
    );
  };

  const generate = () => {
    setShow(true);
  };

  const total = subjects.reduce(
    (sum, s) => sum + Number(s.marks),
    0
  );

  const percentage =
    subjects.length > 0
      ? ((total / (subjects.length * 100)) * 100).toFixed(2)
      : 0;

  const result = percentage >= 40 ? "PASS" : "FAIL";

  return (
    <div className="container">

      {/* LEFT FORM */}
      <div className="formcontainer">
        <h1>Silverwink IT Training Institute</h1>
        <h2>Marksheet Form</h2>
        <hr />

        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Roll No" onChange={(e) => setRoll(e.target.value)} />
        <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    value={item.subject}
                    onChange={(e) =>
                      handleSubject(item.id, e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.marks}
                    onChange={(e) =>
                      handleMarks(item.id, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={generate}>Generate</button>
      </div>

      {/* RIGHT MARKSHEET */}
      <div className="markcontainer">
        {show && (
          <>
            <StudentInfo name={name} roll={roll} course={course} />

            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((item) => (
                  <SubjectRow key={item.id} data={item} />
                ))}
              </tbody>
            </table>

            <ResultSummary
              total={total}
              percentage={percentage}
              result={result}
            />

            <button onClick={() => window.print()}>
              Print
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Marksheet;
