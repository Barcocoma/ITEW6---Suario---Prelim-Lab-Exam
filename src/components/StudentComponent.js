import React, { useState } from 'react';
import './StudentComponent.css';

function StudentComponent({ student }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="student-card">
      <div className="student-header">
        <h3 className="student-name">{student.name}</h3>
        <span className="student-year">Year {student.year}</span>
      </div>

      <div className="student-info">
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>ID:</strong> {student.id}</p>
      </div>

      {isExpanded && (
        <div className="student-details">
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      )}

      <div className="student-actions">
        <button onClick={toggleExpand} className="btn btn-primary">
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default StudentComponent;
