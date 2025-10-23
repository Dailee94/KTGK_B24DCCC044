import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { uid, nowIso } from "../utils/helpers";
import { Post } from "../types/Post";

interface Props {
  onCreate: (post: Post) => void;
}

const CreatePost: React.FC<Props> = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleCreate = (data: Omit<Post, "id" | "createdAt">) => {
    const newPost: Post = { id: uid("p_"), createdAt: nowIso(), ...data };
    onCreate(newPost);
    alert("Đăng bài thành công!");
    navigate("/");
  };

  return <PostForm onSubmit={handleCreate} onCancel={() => navigate("/")} />;
};

export default CreatePost;
