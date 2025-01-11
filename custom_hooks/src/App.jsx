import React, { useState } from 'react';
import useCurrencyInfo from './assets/hooks/useCurrencyInfo';
import InputField from './assets/components/InputBox';

function App() {
  const [amount, setAmount] = useState(100);
  const [currency, setCurrency] = useState('usd');
  const { data: currencyData, error } = useCurrencyInfo(currency);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Currency Info</h1>
      <InputField
        label="Enter Amount"
        amount={amount}
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleCurrencyChange}
        currencyOptions={['usd', 'inr', 'eur']}
        selectCurrency={currency}
        className="w-96 mb-4"
      />
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold">Currency Data</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : currencyData ? (
          <p className="mt-2">
            <strong>{currency.toUpperCase()}:</strong> {JSON.stringify(currencyData)}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
