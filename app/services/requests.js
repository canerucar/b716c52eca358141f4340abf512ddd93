import axios from 'axios';

export const fetchData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/SportProgram/${id}`);
    return response.data.data.events;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
