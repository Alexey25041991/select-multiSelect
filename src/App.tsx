import React from 'react';

import MySelect from 'components/MySelect';
import {
  objDataArr,
  // nodesDataArr,
  objDataArr1
} from './consts';
import { AppStyles, AppWrapper } from './App.styled';


const App = () => (
  <>
    <div>
      <AppStyles />

      <AppWrapper>
        <MySelect
          width={450}
          options={objDataArr}
          initialValue={objDataArr1}
          onChange={(value) => console.log('Value from changed input', value)}
        />
      </AppWrapper>
    </div>
  </>
);


export default App;
