import User from "../data/user";

export default function Nav({ pageName }) {
  const user = User().get();
  function getTextColor(anchorTagId) {
    if (pageName === anchorTagId) {
      return "text-blue-600 font-bold";
    }

    return "text-gray-600";
  }
  return `
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a id="home" href="/" class="${getTextColor("home")}">홈</a></li>
      <li><a id="profile" href="/profile" class="${getTextColor("profile")}">프로필</a></li>
      <li><a id="${user?.username ? "logout" : "login"}" href="${user?.username ? "/logout" : "/login"}" class="text-gray-600">${user?.username ? "로그아웃" : "로그인"}</a></li>
    </ul>
  </nav>
  `;
}
