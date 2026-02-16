/**
 * Student API service - demonstrates API data handling with Fetch API.
 * Uses JSONPlaceholder public API (works locally and when deployed e.g. Vercel).
 * @see https://jsonplaceholder.typicode.com/
 */

const PUBLIC_API = 'https://jsonplaceholder.typicode.com/users';

const COURSES = [
  'Computer Science',
  'Information Technology',
  'Software Engineering',
  'Data Science',
  'Computer Engineering',
];

function mapUserToStudent(user) {
  return {
    id: `STU${String(user.id).padStart(3, '0')}`,
    name: user.name,
    email: user.email,
    course: COURSES[user.id % COURSES.length],
    year: (user.id % 4) + 1,
  };
}

export async function getStudents() {
  const response = await fetch(PUBLIC_API);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error('Failed to load students. The API returned an invalid response.');
  }
  if (!response.ok) {
    throw new Error('Failed to fetch students. Please try again later.');
  }
  try {
    const users = await response.json();
    return Array.isArray(users) ? users.map(mapUserToStudent) : [];
  } catch (e) {
    throw new Error('Failed to load students. Please try again later.');
  }
}
