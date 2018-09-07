export const api =
  process.env.NODE_ENV === 'production'
    ? 'https://api.iecsemanipal.com'
    : 'http://localhost:3000';
export const charts = 'http://charts.iecsemanipal.com';
export default {
  api,
  charts
};
