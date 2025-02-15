"use client";
import EditorJS from "@editorjs/editorjs";
import { useEffect } from "react";

export default function EditorBox() {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "게시글 내용을 입력해주세요!",
    });
    return () => {
      editor.isReady
        .then(() => editor.destroy())
        .catch((err) => console.error("Editor.js cleanup failed:", err));
    };
  }, []);
  return (
    <div
      id="editorjs"
      style={{
        width: "100%",
        maxWidth: "650px",
        minWidth: "350px",
        height: "650px",
        minHeight: "400px",
        maxHeight: "650px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "5px",
        overflow: "auto",
      }}
    ></div>
  );
}
