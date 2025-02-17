import { IPropsTopNaviItem } from "@/src/types/layout/topNaviItemTypes";

export default function TopNaviItem(props: IPropsTopNaviItem) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {props.naviItemObj.map((el) => {
        return (
          <div onClick={() => props.handleRoute(el.route)} key={el.naviText}>
            {el.naviText}
          </div>
        );
      })}
    </div>
  );
}
