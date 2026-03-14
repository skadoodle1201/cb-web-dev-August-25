import axios from "axios";

const BASE_URL = process.env.DOMAIN_URL;
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    const { userDetails } = response.data.data;

    return userDetails;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user`,
      {
        username: name,
        email,
        password,
      },
      { withCredentials: true },
    );
    const { userDetails } = response.data.data;

    return userDetails;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const validate = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/validate`, {
      withCredentials: true,
    });
    const { userDetails } = response.data.data;

    return userDetails;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  try {
    await axios.post(`${BASE_URL}/user/logout`, {}, { withCredentials: true });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
