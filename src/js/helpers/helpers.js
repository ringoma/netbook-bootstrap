export const getBsBreakpoint = (breakpoint) => {
  return +getComputedStyle(document.body)
    .getPropertyValue(`--bs-breakpoint-${breakpoint}`)
    .replace("px", "");
};

export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  if (width < getBsBreakpoint("sm")) {
    return "xs";
  } else if (width >= getBsBreakpoint("xs") && width < getBsBreakpoint("md")) {
    return "sm";
  } else if (width >= getBsBreakpoint("md") && width < getBsBreakpoint("lg")) {
    return "md";
  } else if (width >= getBsBreakpoint("lg") && width < getBsBreakpoint("xl")) {
    return "lg";
  } else {
    return "xl";
  }
};

export const withInBreakpoint = (target) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
  const currentBreakpoint  = getCurrentBreakpoint()
  if(breakpoints.indexOf(currentBreakpoint) <= breakpoints.indexOf(target)) {
    return true;
  }
};