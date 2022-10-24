import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Cross } from "../../icons";

import "./Dropdown.css";

/* 
Dropdown Component API
  placeholder: string; // represents placeholder text to be shown if no item is selected
  options: string[]; // list of all the dropdown menu items
  isMultiselect?: boolean; // indicates whether dropdown should be multi select or single select
  onChange?: (value: string) => void; // optional callback to be triggered when selecting or removing an item from dropdown menu
 */

export const Dropdown = ({ placeholder, options, isMultiselect, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMultiselect ? [] : null);
  const containerRef = useRef();
  const inputRef = useRef();

  // handle dropdown close when user clicks outside of dropdown
  useEffect(() => {
    const closeDropdownMenu = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowMenu(false);
      }
      if (
        !isMultiselect &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", closeDropdownMenu);
    return () => {
      window.removeEventListener("click", closeDropdownMenu);
    };
  });

  // toggle open/close of dropdown on input click
  const onInputClick = () => {
    setShowMenu(!showMenu);
  };

  // returns labels of dropdown values selected for multi-select, single select, and empty cases
  const renderSelectedValues = () => {
    // no value selected
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder;
    }
    // multi-select
    if (isMultiselect) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <Cross />
              </span>
            </div>
          ))}
        </div>
      );
    }
    // single select
    return selectedValue.label;
  };

  // removes option from list for multiselect
  const removeOption = (option) => {
    return selectedValue.filter((x) => x.value !== option.value);
  };

  // removes option from list for multiselect
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  // handles options in dropdown menu when clicked
  const onItemClick = (option) => {
    let newValue;
    if (isMultiselect) {
      // if option already selected, then remove it
      if (selectedValue.findIndex((x) => x.value === option.value) >= 0) {
        newValue = removeOption(option);
        // add option to list of selected values
      } else {
        newValue = [...selectedValue, option];
      }
      // single select
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  // checks if option is selected
  const isSelected = (option) => {
    if (isMultiselect) {
      return selectedValue.filter((x) => x.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div className="dropdown-container" ref={containerRef}>
      <div onClick={onInputClick} className="dropdown-input" ref={inputRef}>
        <div className="dropdown-selected-value">{renderSelectedValues()}</div>
        <div>
          <ChevronDown />
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
