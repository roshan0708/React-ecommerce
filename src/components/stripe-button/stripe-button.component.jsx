import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqdsWJ5kGLDsVifD3181kTYJB5DAjIB4pi4bYzDwVK24BeBpuXaAKvlksPb77qbYZGx2oumD04WEs7jdI04tBoZ00HWdBOBFM';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
           label='Pay Now'
           name='Crown Clothing Ltd.'
           billingAddress
           shippingAddress
           image="https://svgshare.com/i/CUz.svg"
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;