import React from "react";
import { Link } from "react-router-dom";

type Post = {
  id: string;
  title: string;
  content: string;
  thumbnail?: string;
};

const shortText = (text: string, length: number) =>
  text.length > length ? text.slice(0, length) + "..." : text;

interface Props {
  post: Post;
  onDelete?: (id: string) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
      onDelete?.(post.id);
    }
  };

  return (
    <div className="border rounded-xl shadow p-3">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full rounded-lg mb-2"
      />
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-sm text-gray-600">{shortText(post.content, 100)}</p>
      <div className="mt-3 flex justify-between text-sm">
        <Link to={`/posts/${post.id}`} className="text-blue-600">
          Xem chi tiết
        </Link>
        {onDelete && (
          <button onClick={handleDelete} className="text-red-600">
            Xóa
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;
