/**
 * 로그인 체크 함수
 */
export default (function User() {
  function get() {
    const user = localStorage.getItem("user");

    const result = {
      userInfo: null,
      isLogin: false,
    };

    if (user) {
      result.userInfo = JSON.parse(user);
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

    localStorage.setItem("user", JSON.stringify(userInfo));

    return userInfo;
  }

  function remove({ username }) {
    const hasUser =
      JSON.parse(localStorage.getItem("user") || {})?.username === username;

    if (hasUser) {
      localStorage.removeItem("user");
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
