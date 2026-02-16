import React, { useState, useEffect } from 'react';
import StudentComponent from '../components/StudentComponent';
import { getStudents } from '../services/studentApi';
import './StudentsPage.css';

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getStudents();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || 'Failed to load students. Is the API server running? (npm run server)');
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="students-page">
        <div className="students-header">
          <h1>Student List</h1>
          <button type="button" className="refresh-button" disabled>
            Refresh
          </button>
        </div>
        <div className="loading-state">
          <div className="loading-spinner" aria-hidden="true" />
          <p className="loading-message">Loading students...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="students-page">
        <div className="students-header">
          <h1>Student List</h1>
        </div>
        <div className="error-state">
          <div className="error-state-icon" aria-hidden="true">!</div>
          <h2 className="error-state-title">Unable to load students</h2>
          <p className="error-state-message">{error}</p>
          <button type="button" className="retry-button" onClick={loadStudents}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="students-page">
      <div className="students-header">
        <h1>Student List</h1>
        <button type="button" className="refresh-button" onClick={loadStudents}>
          Refresh
        </button>
      </div>

      <div className="students-count">
        Total Students: {students.length}
      </div>
      <div className="students-grid">
        {students.map((student) => (
          <StudentComponent key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentsPage;
