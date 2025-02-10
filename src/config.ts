export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  credentials: 'include',
};
