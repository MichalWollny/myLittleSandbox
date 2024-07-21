import React, { useEffect, useState } from "react";
import Axios from "axios";
import Select from "react-select";
import { HiSwitchHorizontal } from "react-icons/hi";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [info, setInfo] = useState({});
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState({ value: "usd", label: "USD" });
  const [to, setTo] = useState({ value: "inr", label: "INR" });
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to convert the currency
  function convert() {
    const rate = info[to.value];
    console.log("Conversion Rate:", rate);
    if (rate) {
      setOutput(input * rate);
    } else {
      setOutput(0);
    }
  }

  // Function to switch between two currencies
  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  // Calling the API whenever the dependency changes
  useEffect(() => {
    const fetchCurrencyData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value}.json`
        );
        console.log("API Response:", response.data[from.value]);
        if (response.data[from.value]) {
          setInfo(response.data[from.value]);
        } else {
          setError("Invalid currency data received");
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencyData();
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(
      Object.keys(info).map((key) => ({ value: key, label: key.toUpperCase() }))
    );
    convert();
  }, [info]);

  return (
    <div className="App pt-20">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="text"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="from"
            options={options}
            onChange={setFrom}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div className="right">
          <h3>To</h3>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="to"
            options={options}
            onChange={setTo}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button>
        <h2>Converted Amount:</h2>
        <p>
          {input +
            " " +
            from.label +
            " = " +
            output.toFixed(2) +
            " " +
            to.label}
        </p>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CurrencyConverter;
