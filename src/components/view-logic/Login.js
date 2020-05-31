export const isAuthenticated = () => (window.localStorage.getItem("authToken") ? true : false);
export const getAuthToken = () => window.localStorage.getItem("authToken") ?? null;
