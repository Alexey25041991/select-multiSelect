export interface ISelectItem {
  label: string;
  value: string;
};


export interface ISelectProps {
  width?: number;
  options: ISelectItem[];
  value?: string;
};
