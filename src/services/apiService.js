// API Service for fetching student data
// This service demonstrates API data handling using Fetch API

const API_BASE_URL = 'https://api.example.com';

// Mock data for demonstration
// In a real application, this would be replaced with actual API calls
const mockStudents = [
  {
    id: 'STU001',
    name: 'John Smith',
    course: 'Computer Science',
    year: 3,
    email: 'john.smith@university.edu',
    gpa: '3.8'
  },
  {
    id: 'STU002',
    name: 'Emily Johnson',
    course: 'Information Technology',
    year: 2,
    email: 'emily.johnson@university.edu',
    gpa: '3.5'
  },
  {
    id: 'STU003',
    name: 'Michael Brown',
    course: 'Software Engineering',
    year: 4,
    email: 'michael.brown@university.edu',
    gpa: '3.9'
  },
  {
    id: 'STU004',
    name: 'Sarah Davis',
    course: 'Data Science',
    year: 1,
    email: 'sarah.davis@university.edu',
    gpa: '3.7'
  },
  {
    id: 'STU005',
    name: 'David Wilson',
    course: 'Computer Science',
    year: 2,
    email: 'david.wilson@university.edu',
    gpa: '3.6'
  }
];

// Function to fetch all students using Fetch API
export const fetchStudents = async () => {
  try {
    // In a real application, you would use:
    // const response = await fetch(`${API_BASE_URL}/students`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch students');
    // }
    // return await response.json();
    
    // Simulating API call with mock data
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockStudents;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

// Function to fetch a single student by ID using Fetch API
export const fetchStudentById = async (id) => {
  try {
    // In a real application, you would use:
    // const response = await fetch(`${API_BASE_URL}/students/${id}`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch student');
    // }
    // return await response.json();
    
    // Simulating API call with mock data
    await new Promise(resolve => setTimeout(resolve, 300));
    const student = mockStudents.find(s => s.id === id);
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  } catch (error) {
    console.error('Error fetching student:', error);
    throw error;
  }
};

// Function to add a new student using Fetch API
export const addStudent = async (studentData) => {
  try {
    // In a real application, you would use:
    // const response = await fetch(`${API_BASE_URL}/students`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(studentData),
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to add student');
    // }
    // return await response.json();
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 300));
    const newStudent = {
      ...studentData,
      id: `STU${String(mockStudents.length + 1).padStart(3, '0')}`
    };
    return newStudent;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

// Function to update a student using Fetch API
export const updateStudent = async (id, studentData) => {
  try {
    // In a real application, you would use:
    // const response = await fetch(`${API_BASE_URL}/students/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(studentData),
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to update student');
    // }
    // return await response.json();
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return { id, ...studentData };
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

// Function to delete a student using Fetch API
export const deleteStudent = async (id) => {
  try {
    // In a real application, you would use:
    // const response = await fetch(`${API_BASE_URL}/students/${id}`, {
    //   method: 'DELETE',
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to delete student');
    // }
    // return await response.json();
    
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true, id };
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};

export default {
  fetchStudents,
  fetchStudentById,
  addStudent,
  updateStudent,
  deleteStudent
};
