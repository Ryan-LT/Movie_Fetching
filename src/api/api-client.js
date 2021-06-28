import qs from 'qs';
import axios from 'axios';

// eslint-disable-next-line import/no-mutable-exports
export let apiClient;

export const createApi = () => {
  apiClient = axios.create({
    paramsSerializer: (parameters) =>
      qs.stringify(parameters, { arrayFormat: 'repeat' }),
  });
  apiClient.defaults.baseURL = 'http://www.omdbapi.com';

  apiClient.interceptors.request.use((config) => ({
    ...config,
    // headers: { Authorization: 'Bearer ' },
  }));
};

export const fetchMovieByTitle =  async (title) => {
  return await apiClient
    .get(`?apikey=922db138&t=${title}`)
    .then((response) => response.data)
    .catch((error) => new Error(error));
};
