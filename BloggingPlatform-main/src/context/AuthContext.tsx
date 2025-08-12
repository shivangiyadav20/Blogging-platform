import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      const user = JSON.parse(userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const mockUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    const user = mockUsers.find((u: User & { password: string }) => 
      u.email === email && u.password === password
    );

    if (user) {
      const token = `mock-jwt-token-${Date.now()}`;
      const { password: _, ...userWithoutPassword } = user;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userWithoutPassword));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: userWithoutPassword, token } });
      return true;
    }
    return false;
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    const mockUsers = JSON.parse(localStorage.getItem('mockUsers') || '[]');
    
    if (mockUsers.find((u: User) => u.email === userData.email)) {
      return false; // User already exists
    }

    const newUser: User & { password: string } = {
      id: `user-${Date.now()}`,
      username: userData.username || '',
      email: userData.email || '',
      fullName: userData.fullName || '',
      avatar: userData.avatar,
      bio: userData.bio,
      isAdmin: false,
      joinedAt: new Date().toISOString(),
      password: userData.password,
    };

    mockUsers.push(newUser);
    localStorage.setItem('mockUsers', JSON.stringify(mockUsers));

    const token = `mock-jwt-token-${Date.now()}`;
    const { password: _, ...userWithoutPassword } = newUser;
    
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userWithoutPassword));
    
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: userWithoutPassword, token } });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData };
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_PROFILE', payload: updatedUser });
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};