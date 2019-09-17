import axios from "axios";

const API_URL = "https://api.chucknorris.io";

export const clientApi = async (method, url, params = {}) => {
  const request = await axios[method](`${API_URL}/${url}`, params);
  try {
    return request;
  } catch (error) {
    throw new Error(error);
  }
};
