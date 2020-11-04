export const lightTheme = "LIGHT";

export const darkTheme = "DARK";

export const defaultTheme = darkTheme;

export const getTheme = () => localStorage.getItem("theme") || defaultTheme;

export const setTheme = (theme) => localStorage.setItem("theme", setTheme);

export const switchTheme = () => {
  const value = getTheme() == lightTheme ? darkTheme : lightTheme;
  localStorage.setItem("theme", value);
  return value;
};
