import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// Custom module for embedding YouTube videos
const EmbedVideo = Quill.import("formats/video");
EmbedVideo.blotName = "embedVideo";
EmbedVideo.className = "embed-video";
Quill.register(EmbedVideo);

const toolbarOptions = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
  ["link", "image", "video", "embedVideo"],
  ["clean"],
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

interface CreatePostProps {
  onSave: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSave }) => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    onSave(content);
    // Implement your save logic here
    console.log(content);
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <ReactQuill
        value={content}
        modules={modules}
        onChange={handleEditorChange}
        theme="snow"
      />
      <button className="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default CreatePost;
