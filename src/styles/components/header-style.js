import { css } from "@emotion/css";
import { device } from "../breakpoints";

export const container = (...props) => {
  const [theme] = props;

  return css`
    background-image: url(${theme.bgImageMobile});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 2rem;

    @media ${device.tablet} {
      background-image: url(${theme.bgImageDesktop});
    }

    & .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      & .title {
        color: ${theme.titleColor};
    }

    & .icon {
        cursor: pointer;
    }
  }
  `;
};

export const input = (...props) => {
const [theme] = props;

return css`
  background-color: ${theme.bgCard};
  border-radius: 5px;
  border: none;
  color: ${theme.textColor};
  width: 100%;
`;
};


