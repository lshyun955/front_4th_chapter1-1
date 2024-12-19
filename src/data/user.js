export default function User() {
  function get() {
    const user = localStorage.getItem("user");

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }

  function set({ username, email, bio, isLogout = false }) {
    const user = {
      username: username || "",
      email: email || "",
      bio: bio || "",
    };

    if (!isLogout) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    return "success";
  }

  return {
    get,
    set,
  };
}
