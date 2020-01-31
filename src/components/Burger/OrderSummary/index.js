import React from 'react';
import Button from '../../UI/Button';

const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients)
    .map(igKey => {
      debugger
      return (
        <li key={igKey}>
            <span style={{textTransform: "capitalize"}}>
              {igKey}
            </span>
            : {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>
      <ul>
        {summary}
      </ul>
  <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="success" clicked={props.continued}>
        CONTINUE
      </Button>
      <Button type="danger" clicked={props.canceled}>
        CANCEL
      </Button>
    </>
  );
}  

export default orderSummary;