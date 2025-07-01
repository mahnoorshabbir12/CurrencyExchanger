import React, { useState } from "react";
import Code from "./components/code";
import useCurrencyInfo from "./hooks/currencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (!rate) return;
    setConvertedAmount(amount * rate);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #F5F0CD, #FADA7A)",
        padding: "2rem",
        transition: "background 0.5s ease",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="mb-3">
          <Code
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            currencyType={from}
            onCurrencyChange={setFrom}
            currencyOptions={currencyOptions}
          />
        </div>

        <div className="d-flex justify-content-center my-3">
          <button
            type="button"
            className="rounded-pill"
            onClick={swap}
            style={{
              backgroundColor: "#578FCA",
              color: "white",
              border: "none",
              padding: "8px 20px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            ⇅ Swap
          </button>
        </div>
        <div className="mb-3">
          <Code
            label="To"
            amount={convertedAmount}
            onAmountChange={setConvertedAmount}
            currencyType={to}
            onCurrencyChange={setTo}
            currencyOptions={currencyOptions}
            amountDisabled={true}
          />
        </div>
        <button
          type="submit"
          className="w-100 rounded-pill"
          style={{
            backgroundColor: "#3674B5", 
            color: "white",
            fontWeight: "600",
            height: "45px",
            border: "none",
            transition: "background-color 0.3s ease",
          }}
        >
          Convert from {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
