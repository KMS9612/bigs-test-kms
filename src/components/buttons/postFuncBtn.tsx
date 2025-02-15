import { IPropsPostFuntionalBtn } from "@/src/types/components/buttons/postFuncBtnsType";
import styles from "@/styles/components/buttons/postFuncBtn.module.scss";

export default function PostFuntionalBtn(props: IPropsPostFuntionalBtn) {
  return (
    <button className={styles.post_functional_btn} type={props.type}>
      {props.buttonText}
    </button>
  );
}
