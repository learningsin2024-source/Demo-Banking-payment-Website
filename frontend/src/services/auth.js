const login = async (credentials) => {
  await axios.get('/sanctum/csrf-cookie');
  const response = await axios.post('/api/login', credentials);
  return response.data.user; 
};

const getUser = async () => {
  try {
    const response = await axios.get('/api/user');
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      // not authenticated
      return null;
    }
    throw error;
  }
};

const logout = async () => {
  await axios.post('/api/logout');
 
};