import User from "./data/user";
import createRouter from "./routes";

const [router] = createRouter();

function clickEvent(e) {
  const { id, tagName, href } = e.target;

  if (tagName !== "A") {
    return;
  }

  e.preventDefault();

  let path = href.split(window.location.origin)[1];

  if (id === "logout") {
    // 유저 정보 전역 상태 관리
    User().set({ username: "", isLogout: true });
    path = "/login";
  }

  router(path);
}

function submitEvent(e) {
  e.preventDefault();

  const form = e.target;
  const { id } = form;
  const formData = new FormData(form);

  switch (id) {
    case "login-form":
      login(formData);
      break;
    case "profile-form":
      updateProfile(formData);
      break;
  }
}

function updateProfile(formData) {
  const user = {
    username: "",
    email: "",
    bio: "",
  };

  formData.forEach((value, key) => {
    user[key] = value;
  });

  User().set(user);

  // 유저 로그인 정보 전역상태 관리 필요
  router("/profile");
}

function login(formData) {
  const username = formData.get("username");

  if (!username) {
    return;
  }

  const user = {
    username,
    email: "",
    bio: "",
  };

  // 유저 로그인 정보 전역상태 관리 필요
  User().set(user);

  router("/profile");
}

document.body.addEventListener("click", clickEvent);
document.body.addEventListener("submit", submitEvent);

window.addEventListener("load", () =>
  router(window.location.pathname || "/login"),
);
window.addEventListener("popstate", (e) => {
  router(e.target.location.pathname);
});
