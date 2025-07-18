import baseInstance from ".";

export const getUserFeed = async () => {
  try {
    const response = await baseInstance.get("/user/feed");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getConnections = async () => {
  try {
    const response = await baseInstance.get("/user/connections");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRequestsRecieved = async () => {
  try {
    const response = await baseInstance.get("/user/requests/recieved");
    return response.data;
  } catch (error) {
    return error;
  }
};
