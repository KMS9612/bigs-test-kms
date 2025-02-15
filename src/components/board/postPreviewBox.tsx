import { IPropsPostPreviewBox } from "@/src/types/components/board/postPreviewBoxTypes";
import styles from "@/styles/components/board/previewBox.module.scss";

export default function PostPreviewBox(props: IPropsPostPreviewBox) {
  return (
    <div className={styles.preview_box} onClick={props.onClickRouteDetail}>
      <div className={styles.preview_image}>Image</div>
      <div className={styles.preview_info}>
        <div>title</div>
        <div>Category</div>
        <div>Contents</div>
        <div className={styles.created_at_text}>Created At</div>
      </div>
    </div>
  );
}
