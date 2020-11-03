export interface ISelectItem {
  label: string;
  value: string;
};


export interface ISelectProps {
  width?: number;
  options: ISelectItem[];
  value?: string;
};

/////////////
// export interface ICheckboxGroupItem {
//   /** Уникальный идентификатор чекбокса */
//   id: string | number;
//   /** Подпись к чекбоксу */
//   label: string;
//   /** Состояние чекбокса: выбран/не выбран */
//   checked?: boolean;
//   /** Отключение чекбокса */
//   disabled?: boolean;
//   /** Состояние ошибки чекбокса */
//   error?: boolean;
//   size?: string | number;
//   list?: string | number;
// }

