import { supabase } from './supabase';
import store from '../store/store';
import { login, logout } from '../store/slices/authSlice';
import { AppDispatch } from '../store/store';

export type SignUpCredentials = {
  email: string;
  password: string;
  fullName?: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

// Function to create or update a user profile
export const createUserProfile = async (userId: string, email: string, fullName?: string) => {
  try {
    const payload: any = {
      id: userId,
      email: email,
      updated_at: new Date().toISOString()
    };

    if (fullName !== undefined) {
      payload.full_name = fullName;
    }

    const { data, error } = await supabase
      .from('users')
      .upsert(payload, {
        onConflict: 'id'
      })
      .select()
      .single();

    if (error) {
      console.error('Error upserting user profile:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (e) {
    console.error('Exception during profile upsert:', e);
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
          emailRedirectTo: 'https://localhost:5173/dashboard'
        },
      },
    });

    if (error) {
      console.error('Supabase auth signup error:', error);
      throw error;
    }

    console.log('Auth signup successful, user data:', data);

    return data;
  } catch (e) {
    console.error('Unhandled exception during signup:', e);
    throw e;
  }
};

// export const signIn = async ({ email, password }: SignInCredentials, dispatch: AppDispatch) => {
//   try {
//     console.log('Attempting to sign in:', email);
    
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       console.error('Sign in error:', error);
//       throw error;
//     }

//     console.log('Sign in successful');

//     if (data.user) {
//       // Get or create user profile
//       const fullName = data.user.user_metadata?.full_name || '';
//       const userEmail = data.user.email || '';

//       // This will create the profile if it doesn't exist, or update it if it does
//       const profileResult = await createUserProfile(data.user.id, userEmail, fullName);
      
//       if (profileResult.success && profileResult.data) {
//         // Update Redux store with user data
//         dispatch(login({
//           authStatus: true,
//           userData: {
//             id: data.user.id,
//             email: userEmail,
//             fullName: fullName,
//           }
//         }));
//       } else {
//         console.error('Failed to get or create user profile');
//       }
//     }

//     return data;
//   } catch (e) {
//     console.error('Unhandled exception during sign in:', e);
//     throw e;
//   }
// };

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

    if (data.user) {
      const fullName = data.user.user_metadata?.full_name || '';
      const userEmail = data.user.email || '';

      dispatch(login({
        authStatus: true,
        userData: {
          id: data.user.id,
          email: userEmail,
          fullName: fullName
        }
      }));
    }

    return data;
  } catch (error) {
    console.error('Unhandled exception during sign in:', error);
    throw error;
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
