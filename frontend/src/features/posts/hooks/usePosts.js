import { useState, useEffect, useCallback } from 'react';
import {
  getPosts,
  getPost as getPostApi,
  createPost as createPostApi,
  updatePost as updatePostApi,
  deletePost as deletePostApi,
} from '../api/postsApi';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const createPost = useCallback(async (postData) => {
    try {
      setLoading(true);
      const newPost = await createPostApi(postData);
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const updatePost = useCallback(async (postId, postData) => {
    try {
      setLoading(true);
      const updatedPost = await updatePostApi(postId, postData);
      setPosts((prevPosts) => prevPosts.map((post) => (post.id === postId ? updatedPost : post)));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const deletePost = useCallback(async (postId) => {
    try {
      setLoading(true);
      await deletePostApi(postId);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const getPost = useCallback(async (postId) => {
    try {
      setLoading(true);
      const post = await getPostApi(postId);
      setLoading(false);
      return post;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    getPost,
    clearError,
  };
};
