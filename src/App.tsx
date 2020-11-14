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
        />
      </AppWrapper>
    </div>
  </>
);


export default App;
