import api from "../api";

const loginUser = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/signin", { username, password });

    return response.data;
  } catch (err) {
    return err;
  }
};

export default loginUser;
