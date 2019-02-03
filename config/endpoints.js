export const api =
  process.env.NODE_ENV === 'production'
    ? 'https://api.iecsemanipal.com'
    : 'https://devapi.iecsemanipal.com';

export const charts = 'http://charts.iecsemanipal.com';
export default {
  api,
  charts
};
