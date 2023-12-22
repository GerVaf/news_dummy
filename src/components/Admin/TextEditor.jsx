import React from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'
const TextEditor = () => {
  return (
    <SunEditor
      height="500px"
      setOptions={{
        buttonList: [
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor", "textStyle"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "table"],
          ["link", "image"],
          ["fullScreen", "showBlocks", "codeView"],
          ["preview"],
        ],
        // font: ["Roboto", "Open Sans", "Noto Sans Myanmar", "Inconsolata"],
      }}
      setDefaultStyle="font-family: 'Roboto'; font-size: 16px;"
      // onChange={handleEditorChange}
    />
  );
};

export default TextEditor;
