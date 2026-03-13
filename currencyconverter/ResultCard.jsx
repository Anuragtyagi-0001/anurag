import React from 'react';
import { useSelector } from 'react-redux';

const ResultCard = () => {
  const { amount, toCurrency, rates, taxRate, status } = useSelector(state => state.currency);

  // 1. GUARD: If data is not ready, don't run the math!
  if (status === 'loading' || status === 'idle') {
    return <div className="loader">Updating live market rates...</div>;
  }

  // 2. SAFETY: Use optional chaining (?.) and fallback (|| 0)
  const rate = rates[toCurrency] || 0; 
  
  const converted = (Number(amount) || 0) * rate;
  const tax = converted * (taxRate || 0.02);
  const total = converted + tax;

  return (
    <div className="result-container">
      <div className="res-line">
        <span>Converted Amount:</span>
        <span>{converted.toFixed(2)} {toCurrency}</span>
      </div>
      <div className="res-line tax">
        <span>Exchange Tax (2%):</span>
        <span>+ {tax.toFixed(2)} {toCurrency}</span>
      </div>
      <hr />
      <div className="res-line total">
        <span>Final Amount:</span>
        <span>{total.toFixed(2)} {toCurrency}</span>
      </div>
    </div>
  );
};

export default ResultCard;