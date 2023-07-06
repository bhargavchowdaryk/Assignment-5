import axios from 'axios';

const fetchData = async (url, method, data) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      // Add authentication headers if required
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default fetchData;
