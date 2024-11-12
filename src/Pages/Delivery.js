import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function DeliveryPage() {
  const [paymentMethod, setPaymentMethod] = useState(''); // Store selected payment method
  const navigate = useNavigate();
  // Handle change of payment method
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process payment goes here
    console.log(`Processing payment with ${paymentMethod}`);

    navigate('/map')
  };

  return (
    <div className="delivery-page">
      <h1>Complete Your Delivery</h1>
      <form onSubmit={handleSubmit}>
        <h2>Select Payment Method</h2>

        {/* Payment Method Options */}
       
        <label>
          <input

            type="radio"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={handlePaymentChange}
          />
          Lipa na M-Pesa
        </label>
        <label>
          <input
            type="radio"
            value="debit"
            checked={paymentMethod === 'debit'}
            onChange={handlePaymentChange}
          />
          Debit Card
        </label>

        {/* Show fields based on selected payment method */}
        {paymentMethod === 'mpesa' && (
          <div>
            <h3>Enter M-Pesa Phone Number</h3>
            <input type="number" placeholder="Enter your phone number" required />
          </div>
        )}

        {paymentMethod === 'debit' && (
          <div>
            <h3>Enter Debit Card Details</h3>
            <input type="number" placeholder="Card Number" required />
            {/* <input type="text" placeholder="Expiry Date (MM/YY)" required />
            <input type="text" placeholder="CVV" required /> */}
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className='delivery-btn'>Pay Now</button>
      </form>
    </div>
    
  );
}

export default DeliveryPage;
