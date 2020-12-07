import React, { useState } from 'react';

import MySelect from 'components/MySelect';
import {
  options,
  // nodesDataArr,
  initialValue,
  optionsList,
} from './consts';
import { AppStyles, AppWrapper } from './App.styled';
import './styles.css';
import { CheckboxInput } from './components/MySelect/styled';

const App = () => {
  
  // const [firstItemOpened, setFirstItemOpened] = useState<boolean>(optionsList[0].checked ? true : false);
  const [firstItemOpened, setFirstItemOpened] = useState<boolean>(false);
  const [firstItemIcon, setFirstItemIcon] = useState<boolean>(false);


  return(
    <>
      <div>
        <AppStyles />

        <AppWrapper>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <MySelect
            width={450}
            options={options}
            initialValue={initialValue}
            menuOpenAndClose={firstItemOpened}
            className={'select'}
            onChange={(value) => console.log('Value from changed input', value)}
          />
          <MySelect
            width={450}
            options={options}
            initialValue={initialValue}
            menuOpenAndClose={firstItemOpened}
            className={'select'}
            onChange={(value) => console.log('Value from changed input', value)}
          />
          </div>
          <CheckboxInput>
            <span>menuOpenAndClose</span>
            <input type='checkbox' checked={firstItemOpened} onChange={() => setFirstItemOpened(!firstItemOpened)} readOnly />
            <span>with icon</span>
            <input type='checkbox' checked={firstItemIcon} onChange={() => setFirstItemIcon(!firstItemIcon)} readOnly />
          </CheckboxInput>
        </AppWrapper>
      </div>
    </>
  )
};


export default App;
