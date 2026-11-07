import React from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { AdminLogin } from './AdminLogin';
import { AdminLayout } from './AdminLayout';

export const AdminPage: React.FC = () => {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminLayout />;
};
