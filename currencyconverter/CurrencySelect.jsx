import React from 'react';
import { useSelector } from 'react-redux';

const CurrencySelect = ({ label, value, onChange }) => {
  const countries = useSelector(state => state.currency.countries);
  const selected = countries.find(c => c.code === value);

  return (
    <div className="select-box">
      <label>{label}</label>
      <div className="custom-input">
        {selected && (
          <img 
            src={`https://flagcdn.com/w40/${selected.flag}.png`} 
            alt="flag" 
            className="flag-img" 
          />
        )}
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {countries.map(c => (
            <option key={c.code} value={c.code}>
              {c.code} - {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelect;