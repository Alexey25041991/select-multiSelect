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
  disabled?: boolean;
  currentMultiValue: MyOptions[];
  setCurrentMultiValue: (value: MyOptions[]) => void;
};

export interface IInpitProps {
  disabled?: boolean;
  currentMultiValue: MyOptions[];
  initialValueOptions: MyOptions[];
  setCurrentMultiValue: (value: MyOptions[]) => void;
  setOpened: (opened: any) => void;
  opened?: boolean;
};

export interface IDropdownListProps {
  disabled?: boolean;
  list: MyOptions[];
  currentMultiValue: MyOptions[];
  setCurrentMultiValue: (value: (currentMultiValue: any) => any[]) => void;
};

