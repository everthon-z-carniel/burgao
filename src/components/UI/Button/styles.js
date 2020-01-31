import styled from 'styled-components';

const Button = styled.button` 
  color: white;
  border-radius: 10px;
  border: none;
  background: ${props => props.type === "success" ? 
            "#5C9210" : "#944317"
          };
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px 20px 10px 20px;
  margin: 10px;
`;

export default Button;