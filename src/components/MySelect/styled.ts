import styled, { css } from 'styled-components';
// import {ShortArrowDownOutlineIcon} from '../Icons/ShortArrowDownOutlineIcon';
// import {CloseOutlineIcon} from '../Icons/CloseOutlineIcon';

interface ISelectWrapperProps {
  width?: number;
};

interface IIconProps {
  menuIsOpen?: boolean;
  focused?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  error?: boolean;
  size?: number;
}

export const SelectWrapper = styled.div<ISelectWrapperProps>`
  width: ${props => props.width ? props.width : 320}px;
  // border: 1px solid #000;
  position: relative;
  height: 56px;
}
`;

export const Label = styled.div<IIconProps>`
  margin-bottom: 8px;
  color: ${({disabled }) => {
    if (disabled) {
      return '#7E7E7E';
    }
    return '#7E7E7E';
  }};
`;

export const SelectContainer = styled.div<IIconProps>`
  display: flex;
  position: relative;

  ${({ theme, disabled, focused, menuIsOpen, size }) => css`
    height: 56px;
    padding: '12px 16px';
    color: #7E7E7E;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    background: #FFFFFF;
    &:before {
      position: absolute;
      content: '';
      bottom: -1px;
      left: -1px;
      width: calc(100% + (1px * 2));
      height: 2px;
      background: transparent;
    }
  `}
`;

export const CurrentValue = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  // padding-left: 12px;
`;

export const ValueContainerWrapper= styled.div`
align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  margin: 0 8px !important;
`;

export const ChipItem= styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 400px;
  color: #242424;
  background-color: #D8D8D8;
  border-radius: 14px;
  height: 24px;
  font-size: 13px;
  padding: 4px 0 4px 9px;
  margin-right: 8px;  
  display: flex;
  align-items: center;
`;

export const ChipItemChecbox= styled.div`
  position: absolute;
  box-sizing: border-box;
  max-width: 400px;
  color: #242424;
  background-color: #D8D8D8;
  border-radius: 14px;
  height: 24px;
  font-size: 13px;
  padding: 4px 0 4px 9px;
  margin-right: 8px;  
  display: flex;
  align-items: center;
  right: 0;
`;

export const CloseIconContainer= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-left: 2px;
  &:hover {
    background-color: #D8D8D8;
    outline: none;
    cursor: 'default';
  }
  &:focus {
    outline: none;
    border: none;
    background-color: #D8D8D8;
  }
  &:active {
    outline: none;
    border: none;
    background-color: #D8D8D8;
  }
`;

export const CloseSolidIcon= styled.div`
  background-color: red;
  width: 15px;
  height: 15px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const IndicatorsContainerWrapper = styled.div`
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

const commonIconStyles = (
  disabled?: boolean,
  menuIsOpen?: boolean
) => css`
  cursor: pointer;
  fill: ${() => {
    if (disabled) return '#7E7E7E';
    if ((menuIsOpen) && !disabled) return '#7E7E7E';
    return '#7E7E7E';
  }};
  &:hover {
    fill: '#0062FF';
  }
`;

// export const ArrowDownIcon = styled(ShortArrowDownOutlineIcon)<IIconProps>`
export const ArrowDownIcon = styled.div<IIconProps>`
  margin-right: 8px;
  background-color: green;
  width: 20px;
  height: 20px;
  ${({ disabled, menuIsOpen }) =>
    commonIconStyles(disabled, menuIsOpen)}
  ${({ menuIsOpen }) => menuIsOpen && 'transform: rotate(180deg);'}
`;

// export const CloseIcon = styled(CloseOutlineIcon)<IIconProps>`
export const CloseIcon = styled.div<IIconProps>`
  margin-right: 8px;
  background-color: red;
  width: 20px;
  height: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ disabled, menuIsOpen }) =>
    commonIconStyles(disabled, menuIsOpen)}
`;

export const OptionWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  border: 1px solid #D8D8D8;
  min-height: 100px;
  cursor: pointer;

  align-items: center;
  margin-top: 5px;
  white-space: pre-wrap;
  // padding: 4px 8px;
  min-height: 24px;
  height: auto;
  border-radius: 0 0 4px 4px;
  background-color: #FFFFFF;

  > *:hover {
    background-color: #f0f5f7;
    color: #7E7E7E;
  }
`;

export const OptionContent = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  padding: 4px 8px;
  text-overflow: ellipsis;
  & div:first-child {
    padding-right: 8px;
  }
`;

export const Checkbox = styled.div`
  width: 5px;
  height: 5px;
  margin-right: 10px;
`;

export const AdditionalText = styled.div<IIconProps>`
  margin-top: 8px;
  color: #7E7E7E;
`;

