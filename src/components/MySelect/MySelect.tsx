import React, { useState, useCallback } from 'react';
import { ISelectProps, ISelectItem } from 'types';
import { SelectWrapper, OptionWrapper, OptionContent, CurrentValue, IndicatorsContainerWrapper, ArrowDownIcon, CloseIcon, SelectContainer, Label, AdditionalText, Checkbox, ValueContainerWrapper, ChipItem, ChipItemChecbox, CloseIconContainer, CloseSolidIcon} from './styled';


const MySelect: React.FC<ISelectProps> = ({
  width, options, value
}) => {
  const findOption = (options: ISelectItem[], value: string) => {
    return options.filter(opt => opt.value === value)[0];
  };


  const [ opened, setOpened ] = useState<boolean>(false);

  const handleSelectWrapperClick = useCallback(() => {
    setOpened(opened => !opened);
  }, []);


  const [ currentValue, setCurrentValue ] = useState<string>(value!);

  const handleOptionClick = useCallback((e) => {
    setCurrentValue(e.target.dataset.value);
    setOpened(false);
  }, []);


  return (
    <SelectWrapper width={width} >
        <Label disabled={false}>
          {'Город'}
        </Label>
        <SelectContainer>
          <CurrentValue onClick={handleSelectWrapperClick}>
            <ValueContainerWrapper>
              <ChipItem>
                {currentValue ? findOption(options, currentValue).label : 'Не выбрано'}
                <CloseIconContainer>
                  <CloseSolidIcon>x</CloseSolidIcon>
                </CloseIconContainer>
              </ChipItem>
              <ChipItemChecbox>+сч.</ChipItemChecbox>
            </ValueContainerWrapper>
            <IndicatorsContainerWrapper>
              <CloseIcon
                menuIsOpen={opened}
                disabled={false}
                // width={30}
                // height={30}
              >X</CloseIcon>
              <ArrowDownIcon
                menuIsOpen={opened}
                disabled={false}
                // width={30}
                // height={30}
              />
            </IndicatorsContainerWrapper>
          </CurrentValue>
              {opened && <OptionWrapper>
                {options.map(
                  ({ label, value }) => (
                    <OptionContent
                      key={value} data-value={value}
                      onClick={handleOptionClick}
                    >
                      <Checkbox>
                        <input type="checkbox"/>
                      </Checkbox>
                      {label}
                    </OptionContent>
                  )
                )}
              </OptionWrapper>}
      </SelectContainer>
      <AdditionalText error={false} disabled={false}>
        {'Место фактического проживания'}
      </AdditionalText>
    </SelectWrapper>
  )
}

export default MySelect;
