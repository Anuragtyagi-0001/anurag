import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./Style.css";

function StudentData() {
  const [students, setStudents] = useState([]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  return (
    <div className="container">
      <h2>Student Management</h2>

      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default StudentData;
