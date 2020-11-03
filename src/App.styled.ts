import styled, { createGlobalStyle } from 'styled-components';


export const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #fafafa;
    min-height: calc(100vh - 64px);
    height: auto;
    font-family: 'PFBeauSansPro', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  }

  a {
    color: inherit;
  }
`;

export const AppWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`;
