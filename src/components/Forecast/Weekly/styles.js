import styled from "styled-components";

export const Container = styled.div`
  .accordion__item {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 0.5rem;
    margin: 1rem auto;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 10px #d4d2d2;
  }
  .accordion__panel {
    .weekday-details {
      padding: 1rem;
      width: 50%;
      margin: auto;
    }
    .detail-item {
      display: flex;
      justify-content: space-between;
      label {
      }
      p {
      }
    }
  }
  .weekday {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      width: 100%;
      p {
        text-align: center;
      }
      h3 {
        text-align: center;
      }
    }
    .weather-icon {
      height: 50px;
    }
  }
  @media (max-width: 750px) {
    .weekday {
      .left {
        display: flex;
        flex-direction: column;
        width: auto;
        align-items: flex-start;
      }
    }
  }
  @media (max-width: 600px) {
    .accordion__item {
      margin: 1rem;
    }
    .weekday {
      justify-content: space-between;
      .left {
        flex-direction: column;
        width: auto;
        align-items: flex-start;
      }
      .weather-icon {
        height: 100px;
      }
    }
    .accordion__panel {
      .weekday-details {
        width: 100%;
      }
      .detail-item {
        p {
          font-weight: 600;
        }
      }
    }
  }
`;
