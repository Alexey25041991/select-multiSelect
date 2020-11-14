import React from 'react';

import MySelect from 'components/MySelect';
import {
  objDataArr,
  // nodesDataArr,
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
          initialValue='Amsterdam'
        />
      </AppWrapper>
    </div>
  </>
);


export default App;
