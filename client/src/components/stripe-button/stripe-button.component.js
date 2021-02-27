import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_51IIzrRKoV5E4VrlkIdIzlH0OJcwPI2SxvqH7WSpwEVQ8r9DXgpxzCaiHAEIPsFTFWdNYG9ei3n94YDmbErLMHf2j002qlCcuZx';

  const onToken = (token) => {
    const axiosConfig = {
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: stripePrice
      }
    }
    axios(axiosConfig).then(res => {
      alert('Payment successful !');
    }).catch(error => {
      console.error('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment, make sure to use the test credit card.');
    });
  }

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
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;