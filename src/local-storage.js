export const loadAuthToken = () => {
  return localStorage.getItem('Bearer');
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem('Bearer', authToken)
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem('Bearer')
  } catch (e) {}
}