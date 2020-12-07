import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
// import {ShortArrowDownOutlineIcon} from '../Icons/ShortArrowDownOutlineIcon';
// import {CloseOutlineIcon} from '../Icons/CloseOutlineIcon';

interface ISelectWrapperProps {
  width?: string;
};

interface IIconProps {
  menuIsOpen?: boolean;
  focused?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  error?: boolean;
  size?: number;
}

interface IIconProps1 {
  dropdownListBorders: boolean;
  opened: boolean;
}

interface IChipItemLabelProps {
  maxWidthChip?: string;
}


export const SelectWrapper = styled.div<ISelectWrapperProps>`
  width: ${({ width }) => width};
  position: relative;
  height: 120px;
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
    border: 2px solid blue;
    border-radius: 4px;
    background: #FFFFFF;
    // &:before {
    //   position: absolute;
    //   content: '';
    //   bottom: -1px;
    //   left: -1px;
    //   width: calc(100% + (1px * 2));
    //   height: 2px;
    //   // background: blue;
    }
  `}
`;

export const CurrentValue = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  // padding-left: 12px;
  align-items: center;
`;

export const ValueContainerWrapper = styled(forwardRef((props: any, ref: any) => {
  return (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  );
}))`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  margin: 0 8px !important;

  height: 34px;
  overflow: hidden
  display: flex;
  flex-wrap: wrap;
  padding-right: 40px;
`;

export const ChipItemWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 400px;
  color: #242424;
  background-color: #D8D8D8;
  border-radius: 14px;
  height: 24px;
  font-size: 13px;
  padding: 4px 0 4px 9px;
  // margin-right: 8px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin: 4px 8px 4px 4px;
  // overflow: hidden;
`;

export const ChipItemLabel = styled.div<IChipItemLabelProps>`
  position: relative;
  // overflow: hidden;
  box-sizing: border-box;
  max-width: 400px;
  color: #242424;
  background-color: #D8D8D8;
  border-radius: 14px;
  height: 24px;
  font-size: 13px;
  padding: 4px 0 4px 9px;
  // margin-right: 8px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin: 4px 8px 4px 4px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // max-width: 120px;
  max-width: ${({ maxWidthChip }) => maxWidthChip};
  & > div {
    display: flex;
    align-items: center;
    background-color: red;
  }
  & > div:nth-child(1) {
    margin-right: 5px;
  }
  & > div:first-child {
    margin-left: 2px;
  }
`;

export const ChipItemCheckbox = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  color: #242424;
  background-color: #D8D8D8;
  border-radius: 14px;
  height: 24px;
  font-size: 13px;
  padding: 4px 9px 4px 9px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: -35px;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
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

export const CloseSolidIcon = styled.div`
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

export const OptionWrapper = styled.div<IIconProps1>`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  border: 1px solid #D8D8D8;
  z-index: 1000;
  height: 200px;
  min-height: 100px;
  cursor: pointer;
  overflow-y: auto;
  visibility: ${({ opened }) => opened ? 'visible' : 'hidden'};

  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  white-space: pre-wrap;
  // padding: 4px 8px;
  min-height: 24px;
  // height: auto;
  border-radius: 0 0 4px 4px;
  background-color: #FFFFFF;

////!!!!!
// Основная ширина полосы прокрутки.
::-webkit-scrollbar {
  width: 16px;
}

// Цвет дорожки, по которой двигается бегунок прокрутки.
::-webkit-scrollbar-track {
  background: #ffff;
  background-clip: content-box;
}

// Размер и цвет бегунка.
::-webkit-scrollbar-thumb {
  background: #000000;
  border: 6px solid #ffff;
  border-radius: 10px;
}
// Размер бегунка при наведении на него курсора.
::-webkit-scrollbar-thumb:hover{
    border: 5px solid #ffff;
}

  ///////

  > *:hover {
    background-color: #f0f5f7;
    color: #7E7E7E;
  }
  ${({ dropdownListBorders }) =>
  dropdownListBorders &&
  css`
    top: auto;
    bottom: 56px;
  `}
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

export const OptionContentLabel = styled.div`
  pointer-events: none;
  // display: flex;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 4px 8px;
  width: 100%;
  text-overflow: ellipsis;
  align-items: center;
  & div:first-child {
    padding-right: 8px;
  }
`;

export const CheckboxInput = styled.div`
  width: 5px;
  height: 5px;
  margin-right: 10px;
  display: flex;
`;

export const AdditionalText = styled.div<IIconProps>`
  margin-top: 8px;
  color: #7E7E7E;
`;

