// ---------- Types ----------
export type Category =
  | "Công nghệ"
  | "Du lịch"
  | "Ẩm thực"
  | "Đời sống"
  | "Khác";

export interface Post {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: Category;
  createdAt: string; // ISO
}

// ---------- Utilities ----------
export const uid = (prefix = "") =>
  prefix + Math.random().toString(36).slice(2, 9);
export const nowIso = () => new Date().toISOString();
export const shortText = (text: string, n = 100) =>
  text.length <= n ? text : text.slice(0, n).trim() + "...";
