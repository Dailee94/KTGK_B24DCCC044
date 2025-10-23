import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../utils/helpers";

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostDetail: React.FC<Props> = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Bài viết không tồn tại.</p>;

  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete(post.id);
      navigate("/");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full rounded-lg mb-3"
      />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mb-4">Tác giả: {post.author}</p>
      <p>{post.content}</p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          Quay lại
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Xóa bài
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
