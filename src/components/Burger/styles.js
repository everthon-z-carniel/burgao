import styled from 'styled-components';


const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  min-height: 500px;

  @media (min-width: 700px) {
    width: 500px;
  }
  @media (min-width: 1000px) {
    width: 500px;
    height: 100%;
  }
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 100%;
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 100%;
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 600px;
    height: 100%;
  }
`;

export default Burger;