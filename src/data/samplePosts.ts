// src/data/samplePosts.ts
import { Post } from "../types/Post";

export const samplePosts: Post[] = [
  {
    id: "p_1",
    title: "Khám phá công nghệ AI hiện đại",
    author: "Nguyễn Văn A",
    thumbnail: "https://picsum.photos/400/200?1",
    content: "Trí tuệ nhân tạo đang thay đổi thế giới công nghệ...",
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
  {
    id: "p_2",
    title: "Hành trình du lịch miền Trung",
    author: "Lê Thị B",
    thumbnail: "https://picsum.photos/400/200?2",
    content: "Miền Trung Việt Nam với những bãi biển tuyệt đẹp...",
    category: "Du lịch",
    createdAt: new Date().toISOString(),
  },
];

export default samplePosts;
