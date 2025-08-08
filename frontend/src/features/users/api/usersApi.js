// userApi.js

import apiClient from '../../../services/apiClient';

const API_URL = '/users'; // Adjust if your API is different

export const getUsers = async () => await apiClient.get(API_URL).then(res => res.data);
export const getUser = async (id) => await apiClient.get(`${API_URL}/${id}`).then(res => res.data);
export const createUser = async (data) => await apiClient.post(API_URL, data).then(res => res.data);
export const updateUser = async (id, data) => await apiClient.put(`${API_URL}/${id}`, data).then(res => res.data);
export const deleteUser = async (id) => await apiClient.delete(`${API_URL}/${id}`).then(res => res.data);