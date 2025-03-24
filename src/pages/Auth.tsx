
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Loader2, 
  Mail, 
  Key, 
  User, 
  Github, 
  Twitter,
  Phone,
} from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Create form schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;
type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { login, signup, isLoading } = useAuth();

  // Login form setup with pre-filled example email
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "bigyapanhub@gmail.com",
      password: "password",
      rememberMe: false,
    },
  });

  // Signup form setup with pre-filled data
  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "BigyapanHub User",
      email: "bigyapanhub@gmail.com",
      password: "password123",
      confirmPassword: "password123",
    },
  });

  // Reset password form setup
  const resetPasswordForm = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "bigyapanhub@gmail.com",
    },
  });

  // Handle login submission
  const onLoginSubmit = async (values: LoginFormValues) => {
    try {
      // In a real app, we would use the rememberMe value to set a longer-lasting token
      await login(values.email, values.password);
      navigate('/');
    } catch (error) {
      // Error is handled in the login function
      console.error(error);
    }
  };

  // Handle signup submission
  const onSignupSubmit = async (values: SignupFormValues) => {
    try {
      await signup(values.email, values.password, values.name);
      navigate('/');
    } catch (error) {
      // Error is handled in the signup function
      console.error(error);
    }
  };

  // Handle reset password submission
  const onResetPasswordSubmit = async (values: ResetPasswordFormValues) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, we would call an API to send a reset password email
      console.log("Reset password email sent to:", values.email);
      
      // Show success message
      setResetEmailSent(true);
      
      // Close dialog after 3 seconds
      setTimeout(() => {
        setIsResetDialogOpen(false);
        setResetEmailSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    try {
      // Simulate API call for Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Google sign-in
      login("bigyapanhub@gmail.com", "google-auth-token");
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // Handle phone verification success
  const handlePhoneVerification = async () => {
    try {
      // Simulate API call for phone verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful phone sign-in with the provided phone number
      signup("+977 9856075558", "phone-auth-token", "Phone User");
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle between login and signup forms with animation
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Button>
        
        <Card className="shadow-lg border-t-4 border-t-primary transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
            <CardDescription className="text-center">
              {isLogin 
                ? "Enter your credentials to access your account" 
                : "Fill in the form below to create your account"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {isLogin ? (
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-10" placeholder="bigyapanhub@gmail.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              className="pl-10"
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between items-center">
                    <FormField
                      control={loginForm.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="rememberMe" 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                          />
                          <label
                            htmlFor="rememberMe"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember me
                          </label>
                        </div>
                      )}
                    />
                    
                    <Dialog open={isResetDialogOpen} onOpenChange={setIsResetDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Forgot password?
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Reset your password</DialogTitle>
                          <DialogDescription>
                            Enter your email address and we'll send you a link to reset your password.
                          </DialogDescription>
                        </DialogHeader>
                        
                        {resetEmailSent ? (
                          <div className="py-6 text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                              <Mail className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-medium text-green-600 mb-2">Email Sent!</h3>
                            <p className="text-sm text-muted-foreground">
                              Check your inbox for a password reset link.
                            </p>
                          </div>
                        ) : (
                          <Form {...resetPasswordForm}>
                            <form onSubmit={resetPasswordForm.handleSubmit(onResetPasswordSubmit)}>
                              <div className="space-y-4 py-2">
                                <FormField
                                  control={resetPasswordForm.control}
                                  name="email"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email</FormLabel>
                                      <FormControl>
                                        <Input placeholder="bigyapanhub@gmail.com" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              
                              <DialogFooter className="mt-4">
                                <Button type="submit" className="w-full">
                                  Send reset link
                                </Button>
                              </DialogFooter>
                            </form>
                          </Form>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" type="button" className="w-full" onClick={handleGoogleSignIn}>
                      <Mail className="mr-2 h-4 w-4" />
                      Gmail
                    </Button>
                    <Button variant="outline" type="button" className="w-full" onClick={handlePhoneVerification}>
                      <Phone className="mr-2 h-4 w-4" />
                      Phone
                    </Button>
                    <Button variant="outline" type="button" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                  <FormField
                    control={signupForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-10" placeholder="BigyapanHub User" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signupForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-10" placeholder="bigyapanhub@gmail.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              className="pl-10"
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signupForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              className="pl-10"
                              type="password" 
                              placeholder="••••••••" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full mt-6" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" type="button" className="w-full" onClick={handleGoogleSignIn}>
                      <Mail className="mr-2 h-4 w-4" />
                      Gmail
                    </Button>
                    <Button variant="outline" type="button" className="w-full" onClick={handlePhoneVerification}>
                      <Phone className="mr-2 h-4 w-4" />
                      Phone
                    </Button>
                    <Button variant="outline" type="button" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center w-full">
              {isLogin ? (
                <div className="mt-2">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0" onClick={toggleForm}>
                    Sign up
                  </Button>
                </div>
              ) : (
                <div className="mt-2">
                  Already have an account?{" "}
                  <Button variant="link" className="p-0" onClick={toggleForm}>
                    Sign in
                  </Button>
                </div>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
