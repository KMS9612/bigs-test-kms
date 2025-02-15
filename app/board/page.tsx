"use client";
import PostPreviewBox from "@/src/components/board/postPreviewBox";
import styles from "@/styles/board/boardpage.module.scss";
import { useRouter } from "next/navigation";

export default function BoardPage() {
  const router = useRouter();
  const onClickRouteDetail = () => {
    // API 연동 후 해당 글의 ID를 입력 후 Detail컴포넌트에서 API호출
    router.push("/board/1");
    return;
  };
  return (
    <div className={styles.main_box}>
      {/* Post Preview Box Wrap */}
      <div className={styles.preview_box_wrap}>
        {/* Post Preview Box */}
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
        <PostPreviewBox onClickRouteDetail={onClickRouteDetail} />
      </div>
    </div>
  );
}
