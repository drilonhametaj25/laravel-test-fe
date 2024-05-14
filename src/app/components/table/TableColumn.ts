export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
  hideOnMobile?: boolean;
  renderFunction?: (item: any) => any;
  renderHtmlFunction?: (item: any) => any;
  isIcon?: boolean;
  linkUrl?: any;
  linkParams?: any
  bold?: boolean;
  cb?: (x: any) => any;
}
