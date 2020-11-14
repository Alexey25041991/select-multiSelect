export interface ISelectItem {
  label: string;
  value: string;
};

export type MyOptions = ISelectItem | React.ReactNode;

export interface ISelectProps {
  width?: number;
  options: MyOptions[];
  initialValue?: MyOptions[];
  isMulti?: boolean;
};

export interface IChipItemProps {
  value: string;
  currentMultiValue: MyOptions[];
  setCurrentMultiValue: (value: MyOptions[]) => void;
};
