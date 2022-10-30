import styled from "styled-components";

export const Container = styled.div`
  .today {
    display: flex;
    justify-content: space-around;
    img {
      height: 50px;
    }
  }
  .daily-item {
    margin: 2rem;
    display: flex;
    width: 150px;
    flex-direction: column;
    align-items: center;
    height: 150px;
    padding: 1rem;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #d4d2d2;
    text-align: center;
  }
`;
