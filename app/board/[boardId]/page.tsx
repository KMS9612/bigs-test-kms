import DivideLine from "@/src/components/commons/divideLine";
import styles from "@/styles/board/boardDetail.module.scss";

export default function PostDetailPage() {
  return (
    <div className={styles.main_box}>
      <div className={styles.detail_box_wrap}>
        <h2>Title</h2>
        <div className={styles.detail_inner_info}>
          <div>Category</div>
          <div>Created At</div>
        </div>
        <DivideLine />
        <div className={styles.detail_inner_contents}>
          <div>Contents</div>
        </div>
      </div>
    </div>
  );
}
