import React from "react";
import { useId } from "react";
function Code({
  label,
  amount,
  onAmountChange,
  currencyType,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  currencyDisabled = false,
  amountDisabled = false,
  uniqueId = useId(),
}) {
  return (
    <>
      <div className="bg-success text-white rounded p-3 mb-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2 flex-column">
          <span htmlFor={uniqueId} className="fw-bold">
            {label}
          </span>
          <input
            id={uniqueId}
            type="number"
            className="form-control text-center"
            style={{ width: "100px", height: "40px" }}
            placeholder="0"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="d-flex align-items-center gap-2 flex-column">
          <span className="fw-bold">Currency Type</span>
          <select
            className="form-select"
            style={{ width: "100px" }}
            value={currencyType}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currencyType) => (
              <option key={currencyType} value={currencyType}>
                {currencyType}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Code;
