import User from "../data/user";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import { render } from "../utils/hooks";

export default function createRouter() {
  const ROUTES = {
    "/": () => MainPage(),
    "/profile": () => ProfilePage(),
    "/login": () => LoginPage(),
    "/404": () => ErrorPage(),
  };

  // 토큰 만료 또는 없을 경우 로그인 페이지로 이동
  function checkValidation(path) {
    const user = User().get();

    if (!ROUTES[path]) {
      path = "/404";
    } else if (!user && !["/login", "/"].includes(path)) {
      path = "/login";
    } else if (user && path === "/login") {
      path = "/";
    }

    return path;
  }

  function router(path) {
    path = checkValidation(path);
    const route = ROUTES[path] || ROUTES["/404"];

    window.history.pushState(null, "", path);

    render(() => route());
  }
  return [router];
}
