/**
 * Student API service - demonstrates API data handling with Fetch API.
 * Uses json-server backend (run: npm run server).
 */

const API_BASE = '';

export async function getStudents() {
  const response = await fetch(`${API_BASE}/students`);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(
      'API server is not running or returned an invalid response. Start it with: npm run server (in a separate terminal).'
    );
  }
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  try {
    return await response.json();
  } catch (e) {
    throw new Error(
      'API server is not running. Start it with: npm run server (in a separate terminal).'
    );
  }
}
