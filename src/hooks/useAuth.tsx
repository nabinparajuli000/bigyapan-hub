
import { useState, createContext, useContext, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  name?: string;
  phoneNumber?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (emailOrPhone: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Mock login function - in a real app, you'd connect this to a backend
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate validation
      if (email === "bigyapanhub@gmail.com" && password === "password") {
        setUser({
          id: "1",
          email: email,
          name: "BigyapanHub User"
        });
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
        return;
      }
      
      // If email looks like a phone number with +, it's a phone login
      if (email.includes("+") || email.match(/^\d+$/)) {
        setUser({
          id: "3",
          email: "phone-user@example.com", // Using placeholder email for phone users
          phoneNumber: email,
          name: "Phone User"
        });
        toast({
          title: "Success",
          description: "Logged in with phone successfully",
        });
        return;
      }
      
      // Support Google login simulation
      if (email === "bigyapanhub@gmail.com" && password === "google-auth-token") {
        setUser({
          id: "2",
          email: email,
          name: "Google User"
        });
        toast({
          title: "Success",
          description: "Logged in with Google successfully",
        });
        return;
      }
      
      throw new Error("Invalid credentials");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Login failed",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock signup function
  const signup = async (emailOrPhone: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if it's a phone signup
      if (emailOrPhone.includes("+") || emailOrPhone.match(/^\d+$/)) {
        setUser({
          id: "4",
          email: "phone-user@example.com", // Using placeholder email for phone users
          phoneNumber: emailOrPhone,
          name: name
        });
      } else {
        // Email signup
        setUser({
          id: "5",
          email: emailOrPhone,
          name: name
        });
      }
      
      toast({
        title: "Success",
        description: "Account created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Signup failed",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
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
