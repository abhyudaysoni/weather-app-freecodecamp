import styled from "styled-components";

export const Container = styled.div`
  .weather {
    max-width: 600px;
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
    color: white;
    background: #333;
    margin: 1rem auto 1rem auto;
    padding: 1rem;
  }
  .top,
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    .city {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2;
      margin: 0;
      letter-spacing: 1px;
    }
    .weather-description {
      font-weight: 400;
      font-size: 1rem;
    }
    .weather-icon {
      height: 100px;
    }
    .temperature {
      font-weight: 600;
      font-size: 4rem;
      margin: 0;
    }
    .temperature-min,
    .temperature-max {
      margin: 0 1rem;
    }
    .details {
      width: 100%;
      padding-left: 1rem;
    }
    .parameter-row {
      display: flex;
      justify-content: space-between;
    }
    .parameter-label {
      text-align: left;
      font-weight: 400;
      font-size: 1rem;
    }
    .parameter-value {
      text-align: right;
      font-weight: 600;
    }
  }
  @media (max-width: 400px) {
    .weather {
      height: fit-content;
    }
  } ;
`;
