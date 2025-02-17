import { IPropsBodyComponents } from "../types/layout/bodyComponentsTypes";
import TopNavigation from "./topNavi";
import { Noto_Sans_KR, Sour_Gummy } from "next/font/google";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});
export default function BodyComponents(props: IPropsBodyComponents) {
  return (
    <body className={`${sourGummy.variable} ${notoSansKr.variable}`}>
      <TopNavigation />
      {props.children}
    </body>
  );
}
