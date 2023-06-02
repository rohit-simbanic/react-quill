import React from "react";

interface PostViewerProps {
  content: string;
}

const PostViewer: React.FC<PostViewerProps> = ({ content }) => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <h1>Post Viewer</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default PostViewer;
