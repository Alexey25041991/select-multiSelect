import React from 'react';

import MySelect from 'components/MySelect';
import { ISelectItem } from 'types';
import { AppStyles, AppWrapper } from './App.styled';


const App = () => {
  const options: ISelectItem[] = [
    {
      label: 'Москва',
      value: 'Moscow',
    },
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
      label: 'Берлин',
      value: 'Berlin',
    },
    {
      label: 'Лондон',
      value: 'London',
    },
  ];


  return (
    <>
      <AppStyles />

      <AppWrapper>
        <MySelect options={options} value={'Amsterdam'} />
      </AppWrapper>
    </>
  );
};

export default App;
