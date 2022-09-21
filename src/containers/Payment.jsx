import React, { useContext } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';

function Payment() {
  const navigator = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'AeST5YTkxoZlqsjWAGY_uXoirlIZ-78gBWquvVfk3i_aED9jdT4LINA-23808h_EBMtsfHptMQGxgENw',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      };
      addNewOrder(newOrder);
      navigator('/success');
    } 
  }

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>
          Resumen del Pedido:
        </h3>
        {cart.map((item) => {
          <div 
            className="Payment-item"
            key={item.title}
          >
            <div className="Payment-element">
              <h4>
                {item.title}
              </h4>
              <span>
                ${' '}{item.price}
              </span>
            </div>
          </div>
        })}
        <div className="Payment-button">
          <PayPalButtons 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          /> 
        </div>
      </div>
      <div />
    </div>
  )
}

export { Payment };