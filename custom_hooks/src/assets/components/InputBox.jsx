import React, { useState } from 'react';

function InputField({ label, amount, onAmountChange, onCurrencyChange, currencyOptions, selectCurrency, className }) {
  const handleAmountChange = (e) => {
    onAmountChange(Number(e.target.value));
  };

  const handleCurrencyChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2 font-medium">{label}</label>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        className="mb-4 p-2 border rounded"
      />
      <select
        value={selectCurrency}
        onChange={handleCurrencyChange}
        className="p-2 border rounded"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputField;
