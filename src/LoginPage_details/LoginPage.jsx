import React, { useState } from 'react';
import './LoginPage.css';
import OtpVerificationPage from './OtpVerifiy';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setIsValid(value.length === 10);
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowOtpForm(true);
    }
  };

  return (
    <div>
      <div className="login-page">
        {!showOtpForm ? (
          <>
            <h2>Instant Deliveries, Zero Wait!</h2>
            <form onSubmit={handleContinue}>
              <div className="login-form">
                <label htmlFor="num">Log in Or Sign up</label>
                <div className="phone-input">
                  <input
                    type="text"
                    id="num"
                    placeholder="Enter mobile number"
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" disabled={!isValid}>Continue</button>
            </form>
          </>
        ) : (
          <OtpVerificationPage phoneNumber={phoneNumber} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;