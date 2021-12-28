import { css } from "@emotion/css";
import { device } from "../breakpoints";

export const container = (...props) => {
  const [theme] = props;

  return css`
    display: grid;
    place-items: center;
    width: 100%;
    z-index: 1;
    gap: 2rem;
    background-color: ${theme.bgColor};

    & .card {
      min-width: 350px;
      max-width: 350px;
      background-color: ${theme.bgCard};
      color: ${theme.textColor};
      margin-top: -2rem;

      @media ${device.tablet} {
        width: 100%;
        max-width: 700px;
      }

      @media ${device.desktop} {
        width: 100%;
        max-width: 1200px;
      }

      & .card-list {
        width: 100%;
      }

      & .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & .counter-items {
          font-size: 1rem;
          color: ${theme.disableColor};
          width: 100%;
          padding: 1rem;
          text-align: left;
        }

        & .clear-items {
          font-size: 1rem;
          color: ${theme.disableColor};
          width: 100%;
          padding: 1rem;
          text-align: right;
          cursor: pointer;
        }
      }
    }

    & .footer-fixed {
      background-color: ${theme.bgCard};
      color: ${theme.textColor};
      padding: 10px;
      text-align: center;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  `;
};
