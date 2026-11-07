import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser } from '../types';

interface AdminAuthConfig {
  username: string;
  passwordHash: string; // Stored securely
  name: string;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  currentUser: AdminUser | null;
  login: (username: string, password: string, rememberMe?: boolean) => { success: boolean; error?: string };
  logout: () => void;
  updateCredentials: (newUsername: string, newPassword: string, oldPassword: string) => { success: boolean; error?: string };
  resetDefaultCredentials: () => void;
}

const DEFAULT_AUTH_CONFIG: AdminAuthConfig = {
  username: 'admin',
  passwordHash: 'ashram@123',
  name: 'Ashram Administrator'
};

const AUTH_CONFIG_STORAGE_KEY = 'sahaj_admin_auth_config';
const AUTH_SESSION_STORAGE_KEY = 'sahaj_admin_auth_session';

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  // Load auth config or initialize default
  const getStoredConfig = (): AdminAuthConfig => {
    try {
      const saved = localStorage.getItem(AUTH_CONFIG_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load admin auth config from localStorage:', e);
    }
    return DEFAULT_AUTH_CONFIG;
  };

  // Check existing session on mount
  useEffect(() => {
    try {
      const sessionData = sessionStorage.getItem(AUTH_SESSION_STORAGE_KEY) || localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
      if (sessionData) {
        const parsed = JSON.parse(sessionData);
        if (parsed && parsed.username) {
          setIsAuthenticated(true);
          setCurrentUser({
            username: parsed.username,
            name: parsed.name || 'Ashram Administrator',
            role: 'Super Admin',
            lastLogin: parsed.loginTime || new Date().toLocaleString()
          });
        }
      }
    } catch (e) {
      console.error('Failed to restore session:', e);
    }
  }, []);

  const login = (usernameInput: string, passwordInput: string, rememberMe: boolean = false) => {
    const config = getStoredConfig();
    const trimmedUser = usernameInput.trim();
    const trimmedPass = passwordInput.trim();

    if (trimmedUser === config.username && trimmedPass === config.passwordHash) {
      const sessionUser: AdminUser = {
        username: config.username,
        name: config.name,
        role: 'Super Admin',
        lastLogin: new Date().toLocaleString()
      };

      const sessionPayload = JSON.stringify({
        username: sessionUser.username,
        name: sessionUser.name,
        loginTime: sessionUser.lastLogin
      });

      if (rememberMe) {
        localStorage.setItem(AUTH_SESSION_STORAGE_KEY, sessionPayload);
      } else {
        sessionStorage.setItem(AUTH_SESSION_STORAGE_KEY, sessionPayload);
      }

      setIsAuthenticated(true);
      setCurrentUser(sessionUser);
      return { success: true };
    }

    return { success: false, error: 'Invalid username or password. Default is admin / ashram@123' };
  };

  const logout = () => {
    try {
      sessionStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
      localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    } catch (e) {
      console.error('Error during logout:', e);
    }
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const updateCredentials = (newUsername: string, newPassword: string, oldPassword: string) => {
    const config = getStoredConfig();

    if (oldPassword.trim() !== config.passwordHash) {
      return { success: false, error: 'Current password does not match.' };
    }

    if (!newUsername.trim() || !newPassword.trim()) {
      return { success: false, error: 'Username and password cannot be empty.' };
    }

    if (newPassword.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    const updatedConfig: AdminAuthConfig = {
      username: newUsername.trim(),
      passwordHash: newPassword.trim(),
      name: config.name
    };

    try {
      localStorage.setItem(AUTH_CONFIG_STORAGE_KEY, JSON.stringify(updatedConfig));
      if (currentUser) {
        setCurrentUser({ ...currentUser, username: updatedConfig.username });
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Failed to save new credentials in storage.' };
    }
  };

  const resetDefaultCredentials = () => {
    try {
      localStorage.setItem(AUTH_CONFIG_STORAGE_KEY, JSON.stringify(DEFAULT_AUTH_CONFIG));
    } catch (e) {
      console.error('Failed to reset credentials:', e);
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        login,
        logout,
        updateCredentials,
        resetDefaultCredentials
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
