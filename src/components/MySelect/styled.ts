import styled from 'styled-components';

interface ISelectWrapperProps {
  width?: number;
};

export const SelectWrapper = styled.div<ISelectWrapperProps>`
  width: ${props => props.width ? props.width : 200}px;
  border: 1px solid #000;
  position: relative;
  height: 24px;
`;

export const CurrentValue = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const OptionsDropdown = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  border: 1px solid #000;
  min-height: 100px;
  cursor: pointer;

  > *:hover {
    background-color: #f0f5f7;
  }
`;
