import { useCallback, useState, useEffect } from "react";

function useFocus(size: number = 100, upAmount = 1, downAmount = 1, leftAmount = 1, rightAmount = 1) {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [currentSize, setCurrentSize] = useState(size);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === currentSize - 1 ? currentSize - 1 : currentFocus + downAmount);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentFocus(currentFocus === currentSize - 1 ? currentSize - 1 : currentFocus + rightAmount);
      }
      else if (e.key === 'ArrowUp') {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? 0 : currentFocus - upAmount);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? 0 : currentFocus - leftAmount);
      }       
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus, setCurrentSize] as const;
}

export default useFocus;