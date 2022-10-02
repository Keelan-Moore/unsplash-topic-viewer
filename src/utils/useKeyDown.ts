import { useCallback, useState, useEffect } from "react";

export function useKeyDown(targetKey: string): any[] {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyDown] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler(e: KeyboardEvent): void {
      if (e.key === targetKey) {
        setKeyDown(true);
      }
    }
    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return [keyPressed, setKeyDown];
  }