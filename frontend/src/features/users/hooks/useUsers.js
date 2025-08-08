import { useState, useEffect } from 'react';
import { 
    getUsers, 
    getUser as getUserApi,
    createUser as createUserApi,
    updateUser as updateUserApi,
    deleteUser as deleteUserApi 
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

  useEffect(() => {
    console.log('Users state changed:', users);
  }, [users]);

  const createUser = async (userData) => {
    try {
      setLoading(true);
      console.log('Creating user with:', userData);
      const newUser = await createUserApi(userData);
      console.log('New user created:', newUser);
      console.log('setUsers!');
      setUsers(prevUsers => [...prevUsers, newUser]);
      console.log([...prevUsers, newUser]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      setLoading(true);
      const updatedUser = await updateUserApi(userId, userData);
      setUsers(prevUsers =>
        prevUsers.map(user => (user.id === userId ? updatedUser : user))
      );
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      setLoading(true);
      await deleteUserApi(userId);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const getUser = async (userId) => {
    try {
      setLoading(true);
      const user = await getUserApi(userId);
      setLoading(false);
      return user; // Return the fetched user
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null; // Or handle the error as needed
    }
  };

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    getUser,
  };
};