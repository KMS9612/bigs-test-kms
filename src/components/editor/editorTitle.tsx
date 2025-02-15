import styles from "@/styles/editor/editorTitle.module.scss";

export default function EditorTitle() {
  return (
    <input
      className={styles.editor_title_input}
      type="text"
      placeholder="제목을 입력해주세요!"
    />
  );
}
