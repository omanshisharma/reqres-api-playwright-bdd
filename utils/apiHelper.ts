import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://reqres.in/api";
const headers = {
  "x-api-key": "reqres_7ea932b1bc164317b00e9833822da3e2"
};

export const get = async (endpoint: string): Promise<AxiosResponse> => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, { headers });
  return response;
};

export const post = async (endpoint: string, body: object): Promise<AxiosResponse> => {
  const response = await axios.post(`${BASE_URL}${endpoint}`, body, { headers });
  return response;
};

export const put = async (endpoint: string, body: object): Promise<AxiosResponse> => {
  const response = await axios.put(`${BASE_URL}${endpoint}`, body, { headers });
  return response;
};

export const del = async (endpoint: string): Promise<AxiosResponse> => {
  const response = await axios.delete(`${BASE_URL}${endpoint}`, { headers });
  return response;
};