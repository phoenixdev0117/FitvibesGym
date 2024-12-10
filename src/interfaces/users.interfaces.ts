export interface User {
  id: number;
  name: string;
  email: string;
  emailVerified?: Date | null;
  password: string | null;
  role: string;
  image?: string | null;
}
