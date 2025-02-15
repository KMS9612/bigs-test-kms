export interface IPropsPostFuntionalBtn {
  type: "submit" | "reset" | "button" | undefined;
  buttonText: string;
  buttonFunction?: () => void;
}
