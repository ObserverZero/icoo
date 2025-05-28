import React, { createContext, useContext, useEffect, useState } from 'react';
import * as sdk from "matrix-js-sdk";
import MatrixErrorBoundary from './MatrixErrorBoundary';

interface MatrixContextType {
  client: sdk.MatrixClient | null;
  isInitialized: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const MatrixContext = createContext<MatrixContextType>({
  client: null,
  isInitialized: false,
  isAuthenticated: false,
  error: null,
  login: async () => {},
  logout: async () => {}
});

export const useMatrix = () => useContext(MatrixContext);

export const MatrixProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<sdk.MatrixClient | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const initMatrix = async () => {
    try {
      const matrixClient = sdk.createClient({
        baseUrl: "http://192.168.86.28:8008",
      });

      await matrixClient.startClient({ initialSyncLimit: 10 });
      setClient(matrixClient);
      setIsInitialized(true);
      setError(null);
      console.log('Matrix client started successfully');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to initialize Matrix client'));
      console.error('Failed to start Matrix client:', err);
    }
  };

  const login = async (username: string, password: string) => {
    if (!client) {
      throw new Error('Matrix client not initialized');
    }

    try {
      const response = await client.login('m.login.password', {
        user: username,
        password: password,
      });

      // Update client with credentials
      client.credentials = {
        userId: response.user_id
      };

      // Store access token securely
      localStorage.setItem('matrix_access_token', response.access_token);
      localStorage.setItem('matrix_user_id', response.user_id);

      setIsAuthenticated(true);
      console.log('Login successful');
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  };

  const logout = async () => {
    if (!client) {
      throw new Error('Matrix client not initialized');
    }

    try {
      await client.logout();
      localStorage.removeItem('matrix_access_token');
      localStorage.removeItem('matrix_user_id');
      setIsAuthenticated(false);
      console.log('Logout successful');
    } catch (err) {
      console.error('Logout failed:', err);
      throw err;
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const accessToken = localStorage.getItem('matrix_access_token');
    const userId = localStorage.getItem('matrix_user_id');

    if (accessToken && userId && client) {
      client.credentials = { userId };
      setIsAuthenticated(true);
    }
  }, [client]);

  useEffect(() => {
    initMatrix();

    return () => {
      if (client) {
        client.stopClient();
      }
    };
  }, []);

  return (
    <MatrixErrorBoundary onRetry={initMatrix}>
      <MatrixContext.Provider 
        value={{ 
          client, 
          isInitialized, 
          isAuthenticated,
          error, 
          login,
          logout
        }}
      >
        {children}
      </MatrixContext.Provider>
    </MatrixErrorBoundary>
  );
}; 