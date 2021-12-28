import { listBgImages } from "../helpers/listBgImages";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export const lightTheme = {
  title: "light",
  primary: "hsl(280, 87%, 65%)",
  titleColor: "hsl(0, 0%, 98%)",
  bgColor: "hsl(233, 11%, 84%)",
  bgCard: "hsl(0, 0%, 98%)",
  textColor: "hhsl(235, 19%, 35%)",
  disableColor: "hsl(234, 11%, 52%)",
  bgImageMobile: listBgImages.mobileLight,
  bgImageDesktop: listBgImages.desktopLight,
  icon: iconMoon,
};

export const darkTheme = {
  title: "dark",
  primary: "hsl(280, 87%, 65%)",
  titleColor: "hsl(0, 0%, 98%)",
  bgColor: "hsl(235, 21%, 11%)",
  bgCard: "hsl(235, 24%, 19%)",
  textColor: "hsl(234, 39%, 85%)",
  disableColor: "hsl(234, 11%, 52%)",
  bgImageMobile: listBgImages.mobileDark,
  bgImageDesktop: listBgImages.desktopDark,
  icon: iconSun,
};
