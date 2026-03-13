import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./actions";

function TodoApp() {
  const [form, setForm] = useState({ name: "", roll: "", course: "" });
  const [editIndex, setEditIndex] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.roll || !form.course) return;

    if (editIndex !== null) {
      dispatch(updateTodo(editIndex, form));
      setEditIndex(null);
    } else {
      dispatch(addTodo(form));
    }

    setForm({ name: "", roll: "", course: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(todos[index]);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#f4f6f8",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
        🎓 Student Todo (Redux)
      </h2>

      <input
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="roll"
        placeholder="Enter Roll"
        value={form.roll}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="course"
        placeholder="Enter Course"
        value={form.course}
        onChange={handleChange}
        style={inputStyle}
      />

  
      <button onClick={handleAddOrUpdate} style={btnStyle}>
        {editIndex !== null ? "Update Student" : "Add Student"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* List */}
      {todos.length === 0 ? (
        <p style={{ color: "#777" }}>No students added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((t, i) => (
            <li key={i} style={cardStyle}>
              <div>
                <b>{t.name}</b> <br />
                <small>Roll: {t.roll}</small> <br />
                <small>Course: {t.course}</small>
              </div>

              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => handleEdit(i)}
                  style={{ ...smallBtn, background: "#ffc107" }}
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(removeTodo(i))}
                  style={{ ...smallBtn, background: "#dc3545" }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* 🔹 Inline style objects */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const smallBtn = {
  padding: "6px 10px",
  margin: "5px",
  border: "none",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

const cardStyle = {
  background: "white",
  padding: "12px",
  borderRadius: "8px",
  marginBottom: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

export default TodoApp;