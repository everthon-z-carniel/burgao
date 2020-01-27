import styled from 'styled-components';

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-center: center;
  margin: 5px 0;
`;

const BtnControl = styled.button`
  display: block;
  background: ${props => props.type === "less" ?
                  '#D39952' : '#8F5E1E'
              };
  color: white;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;
  :disabled {
    background: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }
  :hover:disabled {
    background: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
  :hover, :active {  
    background: ${props => props.type === 'less' ?
                  '#DAA972' : '#99703F'
                };
  }
`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export {
  Control,
  BtnControl,
  Label
};