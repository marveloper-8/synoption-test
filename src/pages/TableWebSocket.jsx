import React, { useState, useEffect } from "react";
// styling
import "./styles/table.scss";
// icons
import arrow from '../icons/arrow.svg'
import robot from "../icons/robot.svg";
// components
import Empty from '../components/Empty'

const TableWebSocket = () => {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  const currencyArray = currencyPair.toUpperCase().match(/.{1,3}/g);

  useEffect(() => {
    const subscribe = {
      event: "bts:subscribe",
      data: {
        channel: `order_book_${currencyPair}`,
      },
    };
    const ws = new WebSocket("wss://ws.bitstamp.net");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  const { bids, asks } = orders;
  const orderRows = (arr) =>
    arr &&
    arr.map((item, index) => (
      <tr key={index}>
        <td> {item[0]} </td>
        <td> {item[1]} </td>
      </tr>
    ));
  const orderHead = (title) => (
    <thead>
      <th>Amount ({currencyArray[0]})</th>
      <th>Price({currencyArray[1]}) <img src={arrow} alt="arrow" /></th>
    </thead>
  );
    
    const [active, setActive] = useState("rr");
    
  return (
    <div className="table-page bg-1">
      <div className="table-page-inner">
        <div className="table-head font-20 bg-2">
          <div className="title">{`>>`} Single Currency Grid</div>
          <div>
            <img src={robot} alt="robot" /> &times;
          </div>
        </div>
        <div className="table-container">
          <div className="tab-navigation">
            <div
              onClick={() => setActive("rr")}
              className={active === "rr" ? "tab bg-3 color-2 active" : "tab"}
            >
              RR/BF Table
            </div>
            <div
              onClick={() => setActive("call")}
              className={active === "call" ? "tab bg-3 color-2 active" : "tab"}
            >
              Call/Put Table
            </div>
            <div
              onClick={() => setActive("curve")}
              className={active === "curve" ? "tab bg-3 color-2 active" : "tab"}
            >
              Vol Curve
            </div>
            <div
              onClick={() => setActive("smile")}
              className={active === "smile" ? "tab bg-3 color-2 active" : "tab"}
            >
              Vol Smile
            </div>
            <div
              onClick={() => setActive("heatmaps")}
              className={
                active === "heatmaps" ? "tab bg-3 color-2 active" : "tab"
              }
            >
              Heatmaps
            </div>
          </div>
          <div className="table-component">
            {active === "rr" && (
              <table>
                {orderHead()}
                <tbody>{orderRows(bids)}</tbody>
              </table>
            )}

            {active === "call" && (
              <table>
                {orderHead()}
                <tbody>{orderRows(asks)}</tbody>
              </table>
            )}
            
            {active === "curve" && <Empty text="Vol Curve unavailable" />}
            
            {active === "smile" && <Empty text="Vol Smile unavailable" />}
                
            {active === "heatmaps" && <Empty text="Heatmaps unavailable" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWebSocket;
