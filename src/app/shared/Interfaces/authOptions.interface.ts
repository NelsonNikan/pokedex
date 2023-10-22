import { AuthProvider } from './auth.types';
import { User } from './user.interface';

export interface AuthOptions {
  isSignIn: boolean;
  provider: AuthProvider;
  user: User;
}
