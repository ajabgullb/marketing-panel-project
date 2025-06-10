import { supabase } from './supabase';
import store from '../store/store';
import { AppDispatch } from '../store/store';
import { login, logout } from '../store/slices/authSlice';

export type SignUpCredentials = {
  email: string;
  password: string;
  fullName?: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

// Function to create a user profile after they've authenticated
export const createUserProfile = async (userId: string, email: string, fullName?: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({
        id: userId,
        email: email,
        full_name: fullName,
      });

    if (error) {
      console.error('Error creating user profile:', error);
      return { success: false, error };
    }
    
    return { success: true, data };
  } catch (e) {
    console.error('Exception during profile creation:', e);
    return { success: false, error: e };
  }
};

export const signUp = async ({ email, password, fullName }: SignUpCredentials) => {
  try {
    console.log('Starting signup process for:', email);
    
    // Step 1: Sign up with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error('Supabase auth signup error:', error);
      throw error;
    }

    console.log('Auth signup successful, user data:', data);

    // Note: We're not creating the profile here anymore
    // The user will be created in the database after they confirm their email
    // and log in for the first time

    return data;
  } catch (e) {
    console.error('Unhandled exception during signup:', e);
    throw e;
  }
};

export const signIn = async ({ email, password }: SignInCredentials, dispatch: AppDispatch) => {
  try {
    console.log('Attempting to sign in:', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error);
      throw error;
    }

    console.log('Sign in successful');

    // Check if user profile exists, if not create it
    if (data.user) {
      // Get user profile data
      const { data: userData, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileError) {
        if (profileError.code === 'PGRST116') { // Record not found
          console.log('User profile does not exist, creating one...');
          // Get user metadata
          const fullName = data.user.user_metadata?.full_name;
          
          // Create user profile
          const profileResult = await createUserProfile(data.user.id, data.user.email || '', fullName);
          
          if (profileResult.success && profileResult.data) {
            // Update Redux store with user data
            dispatch(login({
              authStatus: true,
              userData: {
                id: data.user.id,
                email: data.user.email || '',
                fullName: fullName || '',
              }
            }));
          }
        } else {
          console.error('Error fetching user profile:', profileError);
        }
      } else {
        // User profile exists, update Redux store
        dispatch(login({
          authStatus: true,
          userData: {
            id: userData.id,
            email: userData.email || '',
            fullName: userData.full_name || '',
          }
        }));
      }
    }

    return data;
  } catch (e) {
    console.error('Unhandled exception during sign in:', e);
    throw e;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
    
    // Clear user data from Redux store
    store.dispatch(logout());
    
    return { success: true };
  } catch (e) {
    console.error('Error signing out:', e);
    throw e;
  }
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data?.user;
};

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
};
