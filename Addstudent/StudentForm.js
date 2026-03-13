import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addStudent({
      name: name,
      age: age,
      grade: grade
    });

    setName("");
    setAge("");
    setGrade("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <button>Add Student</button>
    </form>
  );
}

export default StudentForm;
