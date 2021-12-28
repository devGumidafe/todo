import { css } from "@emotion/css";
import { device } from "../breakpoints";

export const styleLarge = (...props) => {
  const [theme] = props;

return css`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 1rem;
    background-color: ${theme.bgCard};
  }

  @media ${device.desktop} {
    justify-content: center;
  }
`
};

export const styleSmall = (...props) => {
  const [theme] = props;


return css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  max-width: 350px;
  background-color: ${theme.bgCard};
  
  @media ${device.tablet} {
    display: none;
  }
`
};
