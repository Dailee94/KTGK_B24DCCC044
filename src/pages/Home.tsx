import React from "react";
import PostCard from "../components/PostCard";
import { Post } from "../types/Post";

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
}

const Home: React.FC<Props> = ({ posts, onDelete }) => {
  return (
    <div className="home">
      <h2>Tổng số bài viết: {posts.length}</h2>
      <div className="post-grid">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
