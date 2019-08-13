import { css } from "@emotion/core";

const counterDisplayStyles = css`
  .counters {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% - 2rem);
    background:white;
    margin: 0 auto;
  }
  .edit-counters {
    text-align: center;
    margin-bottom: 1rem;
    button:first-of-type {
      margin-right: 1rem;
    }
  }

  .counter {
    box-shadow: 0 0 3px 0 #795f6c;
    display: inline-block;
    text-align: center;
    border-radius: 6px;
    color: #795f6c;
    width: calc(50% - 0.5rem);
 
    margin-bottom: 1rem;
    flex: 0 1 1;
  }
  .close-icon {
    text-align: right;
    line-height: 0;
    padding: 0.5rem 0.5rem 0 0;

    svg {
      width: 0.75rem;
      color: #e2bfd1;
    }
  }

  .counter-display {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    border: none;
    box-shadow: 0 0 3px 0 #795f6c;
    border-radius: 5px;
    background: transparent;
    color: #795f6c;
    margin: 0.25rem;
  }
  .counter-id {
    font-size: 10px;
    margin: 0.5rem 0;
  }

  @media (min-width: 390px) {
    .counters {
      justify-content: center;
    }
    .counter {
      width: calc(30% - 1.5rem);
    }
  }
`;

 
 
export default counterDisplayStyles;
