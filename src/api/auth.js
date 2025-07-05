import baseInstance from ".";

export const login = async (credentials) => {
  const response = await baseInstance.post("/login", credentials);
  return response.data;
};
