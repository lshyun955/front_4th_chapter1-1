/**
 * 로그인 체크 함수
 */
import localStorageService from "@/utils/storage";

export default (function User() {
  function get() {
    const user = localStorageService.get("user");

    const result = {
      userInfo: null,
      isLogin: false,
    };

    if (user) {
      result.userInfo = user;
      result.isLogin = true;
    }

    return result;
  }

  function set({ username, email, bio }) {
    const userInfo = {
      username: username || "",
      email: email || "",
      bio: bio || "",
    };

    localStorageService.set("user", userInfo);

    return userInfo;
  }

  function remove({ username }) {
    const hasUser = localStorageService.get("user")?.username === username;

    if (hasUser) {
      localStorageService.remove("user");
    } else {
      return "none user";
    }
  }

  return {
    get,
    set,
    remove,
  };
})();
