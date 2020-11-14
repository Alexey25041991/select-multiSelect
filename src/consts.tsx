import React from 'react';
import { MyOptions } from 'types';


export const objDataArr: MyOptions[] = [
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
    label: 'Прага',
    value: 'Prague',
  },
  {
    label: 'Амстердам',
    value: 'Amsterdam',
  },
  {
    label: 'Йоханнесбург',
    value: 'Johannessburg',
  },
  {
    label: 'Лондон',
    value: 'London',
  },
];

export const nodesDataArr: MyOptions[] = [
  <div data-value='Berlin' data-label='Берлин'>Берлин <img src={'https://via.placeholder.com/30x30'} alt='' /></div>,
  <div data-value='London' data-label='Лондон'>Лондон</div>,
  <div data-value='Amsterdam' data-label='Амстердам'>Амстердам</div>,
];
