import React, { useEffect, useRef, useCallback } from "react";

interface FocusableItemProps {
  index: number;
  focus: boolean;
  children?: JSX.Element | JSX.Element[];
  setFocus: any;
  className?: string;
  onFocus?: Function;
  listKey: string;
}

const FocusableItem: React.FC<FocusableItemProps> = ({ children, focus, index, setFocus, className, onFocus, listKey}) => { 
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref?.current?.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    // setting focus to that element when it is selected
    
    setFocus(index);
  }, [ index, setFocus]);

  return (
    <li
      className = {`${className} [list-style:none]`}
      tabIndex={focus ? 0 : -1}
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      onFocus={onFocus ? () => onFocus(): undefined}
      key={listKey}
    >
      {children}
    </li>
  );
};

export default FocusableItem;