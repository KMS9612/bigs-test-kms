export interface IPropsTopNaviItem {
  naviItemObj: INaviItemObj[];
  handleRoute: (route: string) => void;
}

interface INaviItemObj {
  route: string;
  naviText: string;
}
