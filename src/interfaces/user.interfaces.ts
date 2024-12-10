
  
  export interface Account {
    id: number;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refreshToken: string | null;
    accessToken: string | null;
    expiresAt: number | null;
    tokenType: string | null;
    scope: string | null;
    idToken: string | null;
    sessionState: string | null;
  }

  export interface Session {
    id: number;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
  }

  export enum UserRole {'user','admin'}
  

  export interface User {
    id: number;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    password: string | null;
    role: 'user'|'admin';
    createdAt: Date;
    updatedAt: Date;

    accounts: Account[];
    sessions: Session[];
    isTwoFactorEnabled: boolean;
    twoFactorConfirmation: TwoFactorConfirmation | null;

  }

  export interface TwoFactorConfirmation {
    id: number;
    userId: string;
    token: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
  }