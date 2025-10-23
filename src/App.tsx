import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostCard from "./components/PostCard";
import PostDetail from "./pages/PostDetail";
import { Post } from "./utils/helpers";
import samplePosts from "./data/samplePosts";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const handleDelete = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">📰 Danh sách Bài viết</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} onDelete={handleDelete} />
                ))}
              </div>
            }
          />
          <Route
            path="/posts/:id"
            element={<PostDetail posts={posts} onDelete={handleDelete} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
