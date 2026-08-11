import 'dotenv/config';
export const config = {
  env: process.env.NODE_ENV || 'development', port: Number(process.env.PORT || 5000),
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', mongoUri: process.env.MONGODB_URI,
  accessSecret: process.env.JWT_ACCESS_SECRET || 'local-nxtbiz-access-secret-change-me',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'local-nxtbiz-refresh-secret-change-me',
  accessExpires: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m', refreshExpires: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
  pdfBaseUrl: process.env.PDF_BASE_URL || 'http://localhost:5000/pdfs'
};
