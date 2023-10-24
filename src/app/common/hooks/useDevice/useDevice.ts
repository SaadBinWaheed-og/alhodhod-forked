import { Breakpoint, BREAKPOINTS } from "../../ui/breakpoints";
import { useCallback, useEffect, useState } from "react";
// import { isNumber } from "lodash";

export type Device = {
  isTouchInput: boolean;
  isBreakpoint: (breakpoint: Breakpoint | number) => boolean;
};

export function useDevice(): Device {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const isTouchInput: boolean = "ontouchstart" in window;

  const isBreakpoint = useCallback(
    (breakpoint: Breakpoint | number): boolean => {
      if (typeof breakpoint === "number") {
        return windowWidth >= breakpoint;
      }
      return windowWidth >= BREAKPOINTS[breakpoint];
    },
    [windowWidth]
  );

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isTouchInput,
    isBreakpoint,
  };
}
