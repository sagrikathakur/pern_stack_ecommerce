import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthContext = useAuth;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('sr_user');
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: 'Sagrika',
          email: 'sagrikathakur68@gmail.com',
          isAdmin: true,
        };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('sr_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('sr_user');
    }
  }, [user]);

  const loginUser = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name || 'User'}!`);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('sr_user');
    toast.success('Logged out successfully');
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
    toast.success('Profile updated');
  };

  const value = {
    user,
    setUser,
    isLoggedIn: Boolean(user),
    isAdmin: Boolean(user?.isAdmin),
    loginUser,
    logoutUser,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
