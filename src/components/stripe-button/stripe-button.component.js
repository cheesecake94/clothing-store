import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_51IIzrRKoV5E4VrlkIdIzlH0OJcwPI2SxvqH7WSpwEVQ8r9DXgpxzCaiHAEIPsFTFWdNYG9ei3n94YDmbErLMHf2j002qlCcuZx';

  return (
    <StripeCheckout
      label="Pay now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Tt0.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay now"
      token={onPaymentSuccess}
      stripeKey={publishableKey}
    />
  )
}

const onPaymentSuccess = token => {
  console.log(token);
  alert('Payment successful');
}

export default StripeCheckoutButton;