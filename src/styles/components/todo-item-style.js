import { css } from "@emotion/css";

export const cardItem = (...props) => {
    const [theme] = props;
  
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      width: 100%;
      gap: 1rem;
  
      & .crossed-text {
        text-decoration: line-through;
        color: ${theme.disableColor};
      }
    `;
  };
  