import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import htmlEditButton from "quill-html-edit-button";

Quill.register("modules/htmlEditButton", htmlEditButton);

interface CreatePostProps {
  onSave: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSave }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    onSave(content);
    console.log(content);
    if (!content.trim()) {
      setError("Please write something...");
    } else {
      setError("");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    htmlEditButton: {
      msg: "Edit the content in HTML format",
      okText: "Ok",
      cancelText: "Cancel",
      buttonHTML: "HTML",
      buttonTitle: "Show HTML source",
      syntax: false,
      prependSelector: "div#myelement",
      editorModules: {},
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <h1>Create a Post</h1>
      <div className="desciption-container">
        <ReactQuill
          value={content}
          formats={formats}
          modules={modules}
          onChange={handleEditorChange}
          theme="snow"
        ></ReactQuill>
        {error && <p>{error}</p>}
      </div>

      <button className="button" onClick={handleSave}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
