import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useState } from "../utils/hooks";

const Post = ({ profileImg, name, time, content }) => {
  return `
  <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src=${profileImg} alt="프로필" class="rounded-full mr-2" />
        <div>
          <p class="font-bold">${name}</p>
          <p class="text-sm text-gray-500">${time}</p>
        </div>
      </div>
      <p>${content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `;
};

export default function MainPage() {
  const [posts] = useState([
    {
      profileImg: "https://via.placeholder.com/40",
      name: "홍길동",
      time: "5분 전",
      content: "오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",
    },
    {
      profileImg: "https://via.placeholder.com/40",
      name: "김철수",
      time: "15분 전",
      content: "새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",
    },
    {
      profileImg: "https://via.placeholder.com/40",
      name: "이영희",
      time: "30분 전",
      content: "오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",
    },
    {
      profileImg: "https://via.placeholder.com/40",
      name: "박민수",
      time: "1시간 전",
      content: "주말에 등산 가실 분 계신가요? 함께 가요!",
    },
    {
      profileImg: "https://via.placeholder.com/40",
      name: "정수연",
      time: "2시간 전",
      content: "새로 나온 영화 재미있대요. 같이 보러 갈 사람?",
    },
  ]);

  return `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${Header()}
      ${Nav({ pageName: "home" })}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button id="post-button" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${posts.map((post) => Post(post)).join("")}
        </div>
      </main>

      ${Footer()}
    </div>
  </div>
  `;
}
