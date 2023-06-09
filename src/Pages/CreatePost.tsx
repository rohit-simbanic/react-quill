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

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    onSave(content);
    console.log(content);
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
      msg: "Edit the content in HTML format", //Custom message to display in the editor, default: Edit HTML here, when you click "OK" the quill editor's contents will be replaced
      okText: "Ok", // Text to display in the OK button, default: Ok,
      cancelText: "Cancel", // Text to display in the cancel button, default: Cancel
      buttonHTML: "HTML", // Text to display in the toolbar button, default: <>
      buttonTitle: "Show HTML source", // Text to display as the tooltip for the toolbar button, default: Show HTML source
      syntax: false, // Show the HTML with syntax highlighting. Requires highlightjs on window.hljs (similar to Quill itself), default: false
      prependSelector: "div#myelement", // a string used to select where you want to insert the overlayContainer, default: null (appends to body),
      editorModules: {}, // The default mod
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
      </div>

      <button className="button" onClick={handleSave}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
