export interface ISelectItem {
  label: string;
  value: string | number ;
  icon?: any;
};

export type MyOptions = ISelectItem | React.ReactNode;

export interface ISelectProps {
  width?: string;
  options: MyOptions[];
  initialValue?: MyOptions[];
  isMulti?: boolean;
  menuOpenAndClose?: boolean;
  className?: string;
  maxWidthChip?: string;
  widthDropdownList?: string;
  onChange?: (value: any) => void;
   /** Коллбек на изменение блюр */
   onBlur?: (e: FocusEvent) => void;
     /** Коллбек на изменение focus */
   onFocus?: (e: FocusEvent) => void;
};

export interface IChipItemProps {
  value: string | number;
  disabled?: boolean;
  currentMultiValue: MyOptions[];
  maxWidthChip?: string;
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
    maxWidthChip?: string;
    onChange?: (value: any) => void;
  };
};

export interface IDropdownListProps {
  disabled?: boolean;
  opened: boolean;
  dropdownListBorders: boolean;
  widthDropdownList?: string;
  list: MyOptions[];
  currentMultiValue: MyOptions[];
  coordinatesInput: {
    topInput: number;
    bottomInput: number;
    leftInput: number;
  };
  setOpened: (opened: any) => void;
  setCurrentMultiValue: (value: (currentMultiValue: any) => any[]) => void;
  onChange?: (value: any) => void;
    //  /** Коллбек на изменение блюр */
    //  onBlur?: (e: FocusEvent) => void;
    //  /** Коллбек на изменение focus */
    //  onFocus?: (e: FocusEvent) => void;
};

export interface ICheckboxGroupItem {
  /** Уникальный идентификатор чекбокса */
  id: string | number;
  /** Подпись к чекбоксу */
  label: string;
  /** Состояние чекбокса: выбран/не выбран */
  checked?: boolean;
}

