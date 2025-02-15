"use client";
import EditorBox from "@/src/components/editor/editor";
import EditorTitle from "@/src/components/editor/editorTitle";
import styles from "@/styles/board/boardPosting.module.scss";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function PostingPage() {
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  const onChangeFilePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).map((file) => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          setPreviewImg((prev) => [...prev, e.target?.result as string]);
        };

        reader.readAsDataURL(file);
        return reader;
      });
    }
  };

  return (
    <div className={styles.main_box}>
      <div className={styles.editor_wrap}>
        <EditorTitle />
        <EditorBox />
        {/* ImagePreviewBox */}
        <div className={styles.image_preview_box}>
          {previewImg.map((url) => (
            <Image
              key={url}
              src={url}
              alt={`image Preview ${url}`}
              width={50}
              height={50}
            />
          ))}
        </div>
        <input onChange={onChangeFilePreview} type="file" accept="image/*" />
        <button className={styles.editor_submit_button}>Submit</button>
      </div>
    </div>
  );
}
