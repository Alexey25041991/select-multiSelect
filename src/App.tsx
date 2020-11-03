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

  // const optionsList: ICheckboxGroupItem[] = [
  //   { id: 1, label: 'Clearable', checked: false },
  //   { id: 2, label: 'Disabled', checked: false },
  //   { id: 3, label: 'Error', checked: false },
  //   { id: 4, label: 'Hide label', checked: false },
  //   { id: 5, label: 'Hide placeholder', checked: false },
  //   { id: 6, label: 'Add additional text', checked: false },
  // ];
  // const [size, setSize] = useState<ICheckboxGroupItem['size']>('big');
  // const [list, setOptions] = useState<ICheckboxGroupItem[]>(optionsList);

  return (
    <>
      <div>
        <AppStyles />

        <AppWrapper>
          <MySelect
            options={options}
            value={'Amsterdam'}
            isMulti
          //   disabled={options[1].checked ? true : false}
          //   clearable={options[0].checked ? true : false}
          //   error={options[2].checked ? true : false}
          //   label={options[3].checked ? '' : 'Город'}
          //   placeholder={options[4].checked ? '' : 'Выберите из списка'}
          //   additionalText={options[5].checked ? 'Место фактического проживания' : ''}
          />
        </AppWrapper>
      </div>
      {/* <div>
        <div>
          <div
            onChange={({ value}) => setSize(value)}
            />
        </div>
        <div>
          <div
            onChange={(_, list) => {
              return setOptions(list);
            } } />
        </div>
      </div> */}
    </>
  );
};

export default App;
