import styled from 'styled-components'
import React from 'react';

const BreadBottom = styled.div`
  min-height: 40px;
  width: 80%;
  background: linear-gradient(#F08E4A, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
`;

const BreadTop = styled.div`
  min-height: 120px;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 150px 150px 20px 20px;
  box-shadow: inset -15px 0 #c15711;
  position: relative;
`;

const Seeds1 = styled.div`
  width: 8%;
  height: 13%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 40%;
  border-radius: 60%;
  transform: rotate(-30deg);
  box-shadow: inset -2px -3px #c9c9c9;
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -130%;
    top: -360%;
    border-radius: 60%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;  
  }
  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 60%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const Seeds2 = styled.div`
  width: 8%;
  height: 13%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 10%;
  border-radius: 60%;
  transform: rotate(20deg);
  box-shadow: inset -3px 0 #c9c9c9;
  :after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -130%;
    top: 400%;
    border-radius: 60%;
    transform: rotate(150deg);
    box-shadow: inset -1px 2px #c9c9c9;  
  }
  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: 100%;
    border-radius: 60%;
    transform: rotate(100deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

const Meat = styled.div`
  width: 100%;;
  height: 35px;
  background: linear-gradient(#7f3608, #602e05);
  border-radius: 15px;
`;

const Cheese = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: -11px;
  width: 100%;
  height: 26px;
  background: linear-gradient(#f4d004, #d6bb22);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 84% 50%, 64% 100%, 39% 50%, 0 50%);
  border-radius: 15px;
`;

const Bacon = () => (
  <div
    style={{
      display: "flex",
      width: "100%"
    }}
  >
    <svg 
      viewBox="0 0 450 20" 
      style={{
        marginTop: "-8px",
        marginBottom: "-10px",
        height: "40px",
        width: "100%"
      }}
    >
      <path d="M0,0 v25 q10,0 20,-10 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 v-10 Z" fill="#cf604c"></path>
      <path d="M0,-1 v20 q10,0 20,-10 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 v-10 Z" fill="#e9d8d5"></path>
      <path d="M0,-5.5 v20 q10,0 20,-10 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 v-10 Z" fill="#cf604c"></path>
    </svg>
  </div>
);  

const Salad = () => (
  <div
    style={{
      display: "flex",
      width: "102%",
      marginTop: "-8px",
      position: "relative",
      zIndex: "2"
    }}
  >
    <svg 
      viewBox="-0.5 0 450 10" 
      style={{
        height: "40px", 
        width: "120%"
      }}
    >
      <path 
        fill="#7bbc46" 
        d="M 0 3 
          q 30 -30 63 0 
          q -30 -30 63 0 q -30 -30 63 0
          q 30 -30 63 0 q -30 -30 63 0 
          q 60 -30 63 0 q 30 -30 63 0 
          l 0 40 l -880 0 z" 
      />
    </svg>
  </div>
);  

export {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
};