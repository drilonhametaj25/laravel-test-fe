import { Modules, Site } from "@app/app/constants"

export interface SidenavMenuItem {
  icon?: string;
  label: string;
  route?: string;
  link?: string;
  params?: Object;
  isVisibleTo?: Array<string>;
  order?: number;
  hidden?: boolean;
  clickCB?: Function;
  disabled?: boolean;
  children?: Array<SidenavMenuItem>;
  hideInSearch?: boolean;
  site?: Site;
  moduleName?: Modules;
}
