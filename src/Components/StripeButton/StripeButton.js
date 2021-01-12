import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I8qCtJN4bYok2raqO1cNTmCl3Nl6qgWChW1SWlcOZNhByP5E33uTYxeToojItsRP1q4Ek379JwHoU1TeYrBYd9900bdsGJw9v";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="My Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is Rs.${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      currency="INR"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
