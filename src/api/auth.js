import baseInstance from ".";

export const login = async (credentials) => {
  const response = await baseInstance.post("/login", credentials);
  return response.data;
};

export const signUp = async (credentials) => {
  const response = await baseInstance.post("/signup", credentials);
  return response.data;
};

export const logout = async () => {
  try {
    const response = await baseInstance.post("/logout");
    return response.data;
  } catch (error) {
    return error;
  }
};
