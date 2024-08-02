import axios from 'axios';

export const handleFetch = async () => {
  const response = await axios.get('https://catfact.ninja/fact');
  if (response.status !== 200) {
    console.log(response);
    throw new Error('Network response was not ok');
  }
  return response.data;
};
