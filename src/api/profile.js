import baseInstance from ".";

export const getProfile = async () => {
  try {
    const response = await baseInstance.get("/profile/view");
    return response.data;
  } catch (error) {
    console.error("Profile API Error:", error);
    return error;
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await baseInstance.patch("/profile/edit", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
