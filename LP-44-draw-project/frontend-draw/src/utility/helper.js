import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/user/login",
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
      "http://localhost:4000/user",
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
    const response = await axios.get("http://localhost:4000/user/validate", {
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
    await axios.post(
      "http://localhost:4000/user/logout",
      {},
      { withCredentials: true },
    );

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
