import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=19785820-0b6e1c9911d9fa9c4dbff5f81&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;