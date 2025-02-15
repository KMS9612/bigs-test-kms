import api from "../api";
import Cookie from "js-cookie";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookie.get("refreshToken");
    if (refreshToken) {
      const response = await api.post("/auth/refresh", { refreshToken });

      return response.data;
    }
  } catch (err) {
    return err;
  }
  return;
};
