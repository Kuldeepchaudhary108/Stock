import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Check if the script is already present in the document
    const existingScript = document.getElementById("tradingview-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.id = "tradingview-script"; // Set an ID to easily reference it
      script.innerHTML = `
        {
          "width": "100%",
          "height": "550",
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview-chart"
        }`;
      containerRef.current.appendChild(script);
    }
  }, []);

  return <div ref={containerRef} />;
};

export default TradingViewChart;
