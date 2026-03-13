import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, updateStudent } from "./Store";

function App() {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.list);

  const handleSubmit = () => {
    if (!subject || !marks) return;

    if (editIndex === null) {
      dispatch(addStudent({ subject, marks }));
    } else {
      dispatch(updateStudent({ index: editIndex, subject, marks }));
      setEditIndex(null);
    }

    setSubject("");
    setMarks("");
  };

  const handleEdit = (item, index) => {
    setSubject(item.subject);
    setMarks(item.marks);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📋 Student Marksheet (RTK CRUD)</h2>

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editIndex === null ? "Add" : "Update"}
      </button>

      <hr />

      {students.map((item, index) => (
        <div key={index}>
          {item.subject} : {item.marks}
          <button onClick={() => handleEdit(item, index)}>Edit</button>
          <button onClick={() => dispatch(deleteStudent(index))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;