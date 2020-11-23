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
  onChange?: (value: any) => void;
};

export interface IChipItemProps {
  value: string;
  disabled?: boolean;
  currentMultiValue: MyOptions[];
  setCurrentMultiValue: (value: MyOptions[]) => void;
  onChange?: (value: any) => void;
};

export interface IInpitProps {
  inputProps: {
    disabled?: boolean;
    currentMultiValue: MyOptions[];
    initialValueOptions: MyOptions[];
    setCurrentMultiValue: (value: MyOptions[]) => void;
    opened?: boolean;
    onChange?: (value: any) => void;
  };
};

export interface IDropdownListProps {
  disabled?: boolean;
  list: MyOptions[];
  currentMultiValue: MyOptions[];
  setOpened: (opened: any) => void;
  setCurrentMultiValue: (value: (currentMultiValue: any) => any[]) => void;
  onChange?: (value: any) => void;
};

