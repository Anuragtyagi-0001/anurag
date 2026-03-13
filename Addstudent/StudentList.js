function StudentList({ students }) {
  return (
    <div className="list">
      {students.map((stu, index) => (
        <div key={index} className="card">
          <p>Name: {stu.name}</p>
          <p>Age: {stu.age}</p>
          <p>Grade: {stu.grade}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
