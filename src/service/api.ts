import Cookie from "js-cookie";
import axios, { isAxiosError } from "axios"; // isAxiosError 가져오기
import { refreshAccessToken } from "./users/refreshAccess";

const api = axios.create({ baseURL: "https://front-mission.bigs.or.kr" });

const isExcluded = (url: string) => {
  const excludedEndPoint = ["/auth/signin", "/auth/signup"];
  return excludedEndPoint.some((endpoint) => url.includes(endpoint));
};

api.interceptors.request.use(
  (config) => {
    if (!isExcluded(config.url || "")) {
      const token = Cookie.get("accessToken");

      config.headers["Content-Type"] = "application/json";

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (isAxiosError(error)) {
      // 401: Unauthorized 발생 시 재발급 후 이전 요청 재시도
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const accessToken = await refreshAccessToken();

          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return api(originalRequest);
        } catch (error) {
          console.error(error);

          alert("요청에 실패했습니다. 새로고침 후 로그인 해주세요.");

          return Promise.reject(error);
        }
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
