import React, { useState, useEffect, PropsWithChildren, forwardRef } from 'react';
import styled from 'styled-components';

/** Components */
import Input from '../input/Input';

/** Types */
import { TInputSize } from '../input/Input';

export type TCustomItem = {
  [key: string]: string;
};

export type TCustomValue = string | number | readonly string[] | undefined;

interface ICustomSelectStyledProps {
  $size: TInputSize;
}

const CustomSelectStyled = styled.div<PropsWithChildren<ICustomSelectStyledProps>>`
  position: relative;
  font-size: ${({ $size }) => {
    if ($size === 'small') return '.808rem';
    if ($size === 'large') return '1.12rem';
    return '1rem';
  }};

  .select--input {
    width: 280px;
  }
`;

const CustomSelectOptionsStyled = styled.div`
  position: absolute;
  z-index: 999;
  width: 280px;
`;

const CustomSelectOptionsListStyled = styled.ul`
  background-color: var(--main-background-color);
  box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 0;
  border-radius: 2px;
  margin-top: 0.6em;
  list-style-type: none;
  transition: all 0.2s ease;
`;

const CustomSelectOptionsListItemStyled = styled.li`
  padding: 0.8em 1em;
  cursor: pointer;
  color: var(--active-color);
  transition: background-color 0.2s ease;

  &:first-child {
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
  }

  &:last-child {
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  &:hover:not(.empty) {
    background-color: rgba(89, 46, 111, 0.2);
  }

  &.active {
    background-color: rgba(89, 46, 111, 0.2);
  }

  &.empty {
    cursor: default;
    font-size: 0.8rem;
  }

  &:hover > ${CustomSelectOptionsListStyled} {
    background-color: pink;
  }
`;

interface ICustomSelectProps {
  value: TCustomValue;
  size?: TInputSize;
  placeholder?: string;
  className?: string;
  items: TCustomItem[];
  // valueKey?: string,
  // name?: string,
  returnObject?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string | TCustomItem) => void;
}

const CustomSelect = forwardRef(
  (
    {
      value = '',
      size = 'medium',
      placeholder = 'select',
      className = '',
      items = [],
      // valueKey = 'value',
      // name = 'name',
      returnObject = true,
      required = false,
      disabled = false,
      onChange,
    }: ICustomSelectProps,
    ref
  ) => {
    const [selectItems, setSelectItems] = useState<TCustomItem[]>(items);
    const [selectValue, setSelectValue] = useState<TCustomValue>('');
    const [selectOption, setSelectOption] = useState<TCustomItem | null>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);

    useEffect(() => {
      if (value) {
        const currentItem = items.find((item) => item.value === value);
        if (currentItem) {
          setSelectValue(currentItem.name);
          setSelectOption(currentItem);
        }
      }
    }, []);

    /**
     * On Custom Input Change Handler
     * @param {MouseEvent} e Event
     */
    const onChangeHandler = (e: { target: { value: string } }) => {
      setSelectValue(e.target.value);

      if (!e.target.value) setSelectOption(null);

      const newItems = items.filter((item) => item.name.includes(e.target.value));

      setSelectItems(newItems);
    };

    /**
     * On Custom Input Focus Handler
     */
    const onFocusHandler = () => {
      if (disabled) return;

      setTimeout(() => {
        setShowOptions(true);
      }, 100);
    };

    /**
     * On Custom Input Blur Handler
     */
    const onBlurHandler = () => {
      if (disabled) return;

      setTimeout(() => {
        setShowOptions(false);
      }, 100);
    };

    /**
     * Click List Item
     * @param {string} optionValue Option Value
     */
    const clickOption = (optionValue: string) => {
      const option: TCustomItem | undefined = items.find((item) => item.value === optionValue);

      if (!option) return;

      setSelectOption(option);
      setSelectValue(option.name);

      onChange(returnObject ? option : optionValue);
    };

    return (
      <CustomSelectStyled className={`select ${className}`} $size={size}>
        <Input
          type="search"
          className="select--input"
          size={size}
          placeholder={placeholder}
          value={selectValue}
          required={required}
          disabled={disabled}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />

        {showOptions && (
          <CustomSelectOptionsStyled className="select__options">
            <CustomSelectOptionsListStyled className="select__options-list">
              {selectItems.length ? (
                selectItems.map((item) => (
                  <CustomSelectOptionsListItemStyled
                    className={`select__options-list_item ${selectOption?.value === item.value ? 'active' : ''}`}
                    key={item.value}
                    onClick={() => clickOption(item.value)}
                  >
                    {item.name}
                  </CustomSelectOptionsListItemStyled>
                ))
              ) : (
                <CustomSelectOptionsListItemStyled className="select__options-list_item empty text-center">
                  no items for select
                </CustomSelectOptionsListItemStyled>
              )}
            </CustomSelectOptionsListStyled>
          </CustomSelectOptionsStyled>
        )}
      </CustomSelectStyled>
    );
  }
);

CustomSelect.displayName = 'CustomSelect';

export default CustomSelect;
