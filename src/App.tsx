import React, { useState } from "react";
import CreatePost from "./Pages/CreatePost";
import PostViewer from "./Pages/PostViewer";
import "./App.css";

const App: React.FC = () => {
  const [postContent, setPostContent] = useState("");

  const handlePostSave = (content: string) => {
    setPostContent(content);
  };

  return (
    <div className="App">
      <CreatePost onSave={handlePostSave} />
      <PostViewer content={postContent} />
    </div>
  );
};

export default App;
