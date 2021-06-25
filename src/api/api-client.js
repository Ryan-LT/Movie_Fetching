import qs from 'qs';
import axios from 'axios';

// eslint-disable-next-line import/no-mutable-exports
export let apiClient;

export const createApi = () => {
  apiClient = axios.create({
    paramsSerializer: (parameters) => qs.stringify(parameters, { arrayFormat: 'repeat' }),
  });

  return {
    get: {},
    post: {},
    put: {},
    delete: {},
  };
};
