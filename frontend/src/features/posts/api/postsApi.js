// postsApi.js

import apiClient from '../../../services/apiClient';

const API_URL = '/posts';

export const getPosts = async () => await apiClient.get(API_URL).then(res => res.data);
export const getPost = async (id) => await apiClient.get(`${API_URL}/${id}`).then(res => res.data);
export const createPost = async (data) => await apiClient.post(API_URL, data).then(res => res.data);
export const updatePost = async (id, data) => await apiClient.put(`${API_URL}/${id}`, data).then(res => res.data);
export const deletePost = async (id) => await apiClient.delete(`${API_URL}/${id}`).then(res => res.data);