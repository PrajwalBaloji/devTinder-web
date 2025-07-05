import baseInstance from ".";

export const getProfile = async () => {
  try {
    const response = await baseInstance.get("/profile/view");
    console.log({ response });

    return response.data;
  } catch (error) {
    return error;
  }
};
