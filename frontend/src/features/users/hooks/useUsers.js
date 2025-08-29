import { useState, useEffect, useCallback } from 'react';
import {
  getUsers,
  getUser as getUserApi,
  createUser as createUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from '../api/usersApi';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const createUser = useCallback(async (userData) => {
    try {
      setLoading(true);
      const newUser = await createUserApi(userData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const updateUser = useCallback(async (userId, userData) => {
    try {
      setLoading(true);
      const updatedUser = await updateUserApi(userId, userData);
      setUsers((prevUsers) => prevUsers.map((user) => (user.id === userId ? updatedUser : user)));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const deleteUser = useCallback(async (userId) => {
    try {
      setLoading(true);
      await deleteUserApi(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const getUser = useCallback(async (userId) => {
    try {
      setLoading(true);
      const user = await getUserApi(userId);
      setLoading(false);
      return user;
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
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    getUser,
    clearError,
  };
};
