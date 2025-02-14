import api from "../api";

const createUser = async (
  username: string,
  name: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await api.post("/auth/signup", {
      username,
      name,
      password,
      confirmPassword,
    });

    return response.data;
  } catch (err) {
    return err;
  }
};

export default createUser;
