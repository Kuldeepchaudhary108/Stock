import React, { useEffect, useState, useRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { setSymbol } from "../store/authSlice.js";

function TradingViewWidget({ onSymbolExport }) {
  const dispatch = useDispatch();
  const { symbol: tickerSymbol } = useSelector((state) => state.auth);
  const container = useRef();
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");

  useEffect(() => {
    // Clear the container to ensure the script is added only once
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": 550,
          "symbol": "${symbol}",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "range": "12M",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "NASDAQ:TSLA",
            "NASDAQ:NVDA",
            "NASDAQ:AMZN",
            "NASDAQ:MSFT",
            "NASDAQ:META",
            "NASDAQ:AAPL",
            "NASDAQ:GOOGL",
            "NASDAQ:NFLX",
            "NASDAQ:ADBE",
            "NASDAQ:INTC"
          ],
          "details": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

    container.current.appendChild(script);
  }, [symbol]); // Depend on the symbol to update the widget when it changes

  const handleSymbolChange = (event) => {
    const newSymbol = event.target.value;
    console.log(newSymbol);
    setSymbol(newSymbol);
    dispatch(setSymbol(newSymbol));
  };

  return (
    <div style={{ width: "100%", height: "650px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="symbol-select" style={{ marginRight: "10px" }}>
          Select Symbol:
        </label>
        <select
          id="symbol-select"
          value={symbol}
          onChange={handleSymbolChange}
          style={{ padding: "5px", fontSize: "14px" }}
        >
          <option value="NASDAQ:AAPL">Apple (AAPL)</option>
          <option value="NASDAQ:TSLA">Tesla (TSLA)</option>
          <option value="NASDAQ:NVDA">NVIDIA (NVDA)</option>
          <option value="NASDAQ:AMZN">Amazon (AMZN)</option>
          <option value="NASDAQ:MSFT">Microsoft (MSFT)</option>
          <option value="NASDAQ:META">Meta (META)</option>
          <option value="NASDAQ:GOOGL">Google (GOOGL)</option>
          <option value="NASDAQ:NFLX">Netflix (NFLX)</option>
          <option value="NASDAQ:ADBE">Adobe (ADBE)</option>
          <option value="NASDAQ:INTC">Intel (INTC)</option>
        </select>
      </div>

      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ width: "100%", height: "600px" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const TradingViewChart = memo(TradingViewWidget);
