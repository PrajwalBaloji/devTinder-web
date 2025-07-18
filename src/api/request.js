import baseInstance from ".";

export const sendRequest = async (status, id) => {
  try {
    const response = await baseInstance.post(`/request/send/${status}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const reviewRequest = async (status, id) => {
  try {
    const response = await baseInstance.post(`/request/review/${status}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
