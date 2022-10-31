import styled from "styled-components";

export const Container = styled.div`
  .today {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    justify-content: space-around;
    img {
      height: 50px;
    }
  }
  .daily-item {
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #d4d2d2;
    text-align: center;
    min-width: fit-content;
  }
  @media (min-width: 1080px) {
    .daily-item {
      width: 300px;
    }
  }
`;
