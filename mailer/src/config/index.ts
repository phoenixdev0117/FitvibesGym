import dotenv from "dotenv";

dotenv.config();

export const BUILD_MODE = process.env.BUILD_MODE || "development";

export const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/auth-app";
export const CLIENT_URL = process.env.CLIENT_URL;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "";
export const ACTIVATION_TOKEN_SECRET =
  process.env.ACTIVATION_TOKEN_SECRET || "";

export const SMTP_MODE = process.env.SMTP_MODE || "none";
export const SMTP_FROMMAIL = process.env.SMTP_FROMMAIL || "";
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "";

export const MAILING_SERVICE_CLIENT_ID =
  process.env.MAILING_SERVICE_CLIENT_ID || "";
export const MAILING_SERVICE_CLIENT_SECRET =
  process.env.MAILING_SERVICE_CLIENT_SECRET || "";
export const MAILING_SERVICE_REFRESH_TOKEN =
  process.env.MAILING_SERVICE_REFRESH_TOKEN || "";
export const SENDER_EMAIL_ADDRESS = process.env.SENDER_EMAIL_ADDRESS || "";

export const CLOUD_NAME = process.env.CLOUD_NAME || "";
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";

export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
export const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || "";
