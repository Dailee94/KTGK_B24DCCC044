import React, { useState } from "react";
import { Category, Post } from "../types/Post";

interface Props {
  initialData?: Post;
  onSubmit: (data: Omit<Post, "id" | "createdAt">) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

const categories: Category[] = [
  "Công nghệ",
  "Du lịch",
  "Ẩm thực",
  "Đời sống",
  "Khác",
];

const PostForm: React.FC<Props> = ({
  initialData,
  onSubmit,
  onCancel,
  isEdit,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [category, setCategory] = useState<Category>(
    initialData?.category || "Khác"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (title.trim().length < 10) {
      alert("Tiêu đề phải có ít nhất 10 ký tự");
      return;
    }
    if (author.trim().length < 3) {
      alert("Tác giả phải có ít nhất 3 ký tự");
      return;
    }
    if (content.trim().length < 50) {
      alert("Nội dung phải có ít nhất 50 ký tự");
      return;
    }

    onSubmit({ title, author, thumbnail, content, category });
  };

  return (
    <form
      className="post-form max-w-2xl mx-auto p-6 bg-white shadow rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium mb-1">
            Tiêu đề
          </label>
          <input
            id="title"
            placeholder="Nhập tiêu đề..."
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author" className="block font-medium mb-1">
            Tác giả
          </label>
          <input
            id="author"
            placeholder="Nhập tên tác giả..."
            className="w-full border p-2 rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="thumbnail" className="block font-medium mb-1">
            Ảnh thumbnail (URL)
          </label>
          <input
            id="thumbnail"
            placeholder="https://..."
            className="w-full border p-2 rounded"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content" className="block font-medium mb-1">
            Nội dung
          </label>
          <textarea
            id="content"
            rows={10}
            placeholder="Nhập nội dung bài viết..."
            className="w-full border p-2 rounded resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="category" className="block font-medium mb-1">
            Thể loại
          </label>
          <select
            id="category"
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Hủy
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          {isEdit ? "Cập nhật" : "Đăng bài"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
