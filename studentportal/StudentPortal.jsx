
import React from 'react';

function StudentPortal() {
    // 1. Variables & Expressions
    const studentName = "Shubham Chaudhary";
    const currentDate = new Date().toDateString();
    const isFeesPaid = true;
    
    // 2. Array for Mapping
    const courses = ["React JS", "Java JDBC", "Python"];

    // 3. Inline Styling Object
    const cardStyle = {
        backgroundColor: '#1e293b',
        padding: '25px',
        borderRadius: '12px',
        color: 'white',
        border: '1px solid #334155',
        maxWidth: '400px',
        margin: '0 auto',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div style={cardStyle}>
            <div className="header">
                {/* Embedding Expressions */}
                <h1>Welcome, {studentName}</h1>
                <p style={{color: '#94a3b8', fontSize: '12px'}}>
                    Date: {currentDate}
                </p>
            </div>

            <hr style={{borderColor: '#334155', margin: '15px 0'}} />

            <h3>Enrolled Courses:</h3>
            <ul className="course-list">
                {/* 4. Mapping Array to JSX */}
                {courses.map((course, index) => (
                    <li key={index}>
                        {index + 1}. {course}
                    </li>
                ))}
            </ul>

            <div className="status-bar">
                <span>Fee Status: </span>
                
                {/* 5. Conditional Rendering (Ternary) */}
                {isFeesPaid ? (
                    <strong style={{color: '#4ade80'}}>ACTIVE</strong>
                ) : (
                    <strong style={{color: '#f87171'}}>PENDING</strong>
                )}
            </div>
        </div>
    );
}

export default StudentPortal;