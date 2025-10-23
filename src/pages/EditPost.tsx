import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onUpdate: (updated: Post) => void;
}

const EditPost: React.FC<Props> = ({ posts, onUpdate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Bài viết không tồn tại.</p>;

  const handleUpdate = (data: Omit<Post, "id" | "createdAt">) => {
    const updated = { ...post, ...data };
    onUpdate(updated);
    alert("Cập nhật thành công!");
    navigate(`/posts/${post.id}`);
  };

  return (
    <PostForm
      initialData={post}
      onSubmit={handleUpdate}
      onCancel={() => navigate(`/posts/${post.id}`)}
      isEdit
    />
  );
};

export default EditPost;
