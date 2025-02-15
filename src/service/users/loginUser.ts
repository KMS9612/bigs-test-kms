import Cookie from "js-cookie";
import api from "../api";

const loginUser = async (username: string, password: string) => {
  try {
    // API Request
    const response = await api.post("/auth/signin", { username, password });

    if (!response) {
      throw new Error("에러");
      return;
    }
    // Token Store In Cookie
    Cookie.set("accessToken", response.data.accessToken, {
      secure: true,
      sameSite: "strict",
    });
    Cookie.set("refreshToken", response.data.refreshToken, {
      secure: true,
      sameSite: "strict",
    });

    return response.data;
  } catch (err) {
    // err에 response가 담겨오지않음.
    console.log(err);
  }
};

export default loginUser;
