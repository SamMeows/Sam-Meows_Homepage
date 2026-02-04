export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  type: "article" | "video";
  thumbnail?: string;
  date: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title: '"고양이와 대화하세요"…AI 디지털 반려동물 \'리티\'를 만든 이유',
    source: "숭실대신문",
    url: "https://www.ssunews.net/news/articleView.html?idxno=11548",
    type: "article",
    thumbnail: "/news-thumbnails/news-1.jpg",
    date: "2025.05.12",
  },
  {
    id: "2",
    title: "삼냥이즈, AI 디지털 반려동물 서비스 '리티'",
    source: "전자신문",
    url: "https://www.etnews.com/20250418000055",
    type: "article",
    thumbnail: "/news-thumbnails/news-2.png",
    date: "2025.04.18",
  },
  {
    id: "3",
    title: "충남 생성형 AI 기술창업 경진대회, 삼냥이즈 대상 수상",
    source: "이투뉴스",
    url: "https://www.e2news.com/news/articleView.html?idxno=313941",
    type: "article",
    thumbnail: "/news-thumbnails/news-3.jpg",
    date: "2024.10.31",
  },
  {
    id: "4",
    title: "[현장] 고려대 '2025 가을 츄츄데이'… 혁신의 창을 여는",
    source: "Tech42",
    url: "https://www.tech42.co.kr/%ED%98%84%EC%9E%A5-%EA%B3%A0%EB%A0%A4%EB%8C%80-2025-%EA%B0%80%EC%9D%84-%EC%B8%84%EC%B8%84%EB%8D%B0%EC%9D%B4-%ED%98%81%EC%8B%A0%EC%9D%98-%EC%B0%BD%EC%9D%84-%EC%97%AC/",
    type: "article",
    thumbnail: "/news-thumbnails/news-4.png",
    date: "2025.11.08",
  },
  {
    id: "5",
    title: "리티와 함께하는 일상 - 삼냥이즈 소개 영상",
    source: "YouTube",
    url: "https://www.youtube.com/watch?v=UpYMO30sPiE",
    type: "video",
    thumbnail: "/news-thumbnails/news-5.jpg",
    date: "2025.01.15",
  },
];
