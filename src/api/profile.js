import baseInstance from ".";

export const getProfile = async () => {
  try {
    const response = await baseInstance.get("/profile/view");
    console.log({ response });

    return response.data;
  } catch (error) {
    console.error("Profile API Error:", error);
    throw error;
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await baseInstance.patch("/profile/edit", data);
    return response.data;
  } catch (error) {
    console.error("Update Profile API Error:", error);
    throw error;
  }
};
