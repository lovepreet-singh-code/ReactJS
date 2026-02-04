import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);

  // Default currencies
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency rates
  const currencyInfo = useCurrencyInfo(from);

  // Currency dropdown options
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  // Swap currencies
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(0);
  };

  // Convert currency safely
  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Input */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To Input */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}

                // ✅ FIX HERE
                selectCurrency={to}

                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
