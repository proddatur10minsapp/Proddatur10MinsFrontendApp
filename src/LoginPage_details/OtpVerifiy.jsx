import React, { useState } from 'react';
import './OtpVerificationPage.css';
import CategoriesPage from '../Categories_details/CategoriesPage';

const OtpVerificationPage = ({ phoneNumber }) => {
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setIsVerified(true);
  };

  if (isVerified) {
    return <CategoriesPage />;
  }

  return (
    <div className="otp-verification-page">
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your phonenumber</p>
      <form onSubmit={handleOtpSubmit}>
        <div className="form-group-01">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            required
          />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpVerificationPage;