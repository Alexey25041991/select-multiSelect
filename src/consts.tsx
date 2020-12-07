import React from 'react';
import { MyOptions, ICheckboxGroupItem } from 'types';


export const options: MyOptions[] = [
  {
    label: 'Москва',
    value: 'Moscow',
  },
  <div data-value='Berlin' data-label='Берлин'>Берлин <img src={'https://via.placeholder.com/30x30'} alt='' /></div>,
  {
    label: 'Париж',
    value: 'Paris',
  },
  {
    label: 'Адлер',
    value: 'Adler',
  },
  {
    label: 'Воронеж',
    value: 'Woronej',
  },
  {
    label: 'Прага',
    value: 'Prague',
  },
  {
    label: 'Амстердам',
    value: 'Amsterdam',
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
];

export const initialValue: MyOptions[] = [
  // {
  //   label: 'Париж',
  //   value: 'Paris',
  // },
  // {
  //   label: 'Москва',
  //   value: 'Moscow',
  // },
  {
    label: 'Смоленск',
    value: 'Smolensk',
  },
  <div data-value='sohi' data-label='Сочи'>Сочи <img src={'https://via.placeholder.com/30x30'} alt='' /></div>,
  // {
  //   label: 'Питер',
  //   value: 'Piter',
  // },
];

export const nodesDataArr: MyOptions[] = [
  <div data-value='Berlin' data-label='Берлин'>Берлин <img src={'https://via.placeholder.com/30x30'} alt='' /></div>,
  <div data-value='London' data-label='Лондон'>Лондон</div>,
  <div data-value='Amsterdam' data-label='Амстердам'>Амстердам</div>,
];

export const optionsList: ICheckboxGroupItem[] = [
  { id: 1, label: 'menuOpenAndClose', checked: false },
];
