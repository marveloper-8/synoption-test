import React, {useState} from "react";
// styling
import "./styles/table.scss";
// icons
import arrow from '../icons/arrow.svg'

const Table = (e) => {
    const [active, setActive] = useState("rr")
  return (
    <div className="table-page bg-1">
      <div className="table-page-inner">
        <div className="table-head font-20 bg-2">
          <div>{`>>`} Single Currency Grid</div>
          <div>&times;</div>
        </div>
        <div className="table-container">
          <div className="tab-navigation">
            <div onClick={() => setActive("rr")} className={active === "rr" ? "tab bg-3 color-2 active" : "tab"}>RR/BF Table</div>
            <div onClick={() => setActive("call")} className={active === "call" ? "tab bg-3 color-2 active" : "tab"}>Call/Put Table</div>
            <div onClick={() => setActive("curve")} className={active === "curve" ? "tab bg-3 color-2 active" : "tab"}>Vol Curve</div>
            <div onClick={() => setActive("smile")} className={active === "smile" ? "tab bg-3 color-2 active" : "tab"}>Vol Smile</div>
            <div onClick={() => setActive("heatmaps")} className={active === "heatmaps" ? "tab bg-3 color-2 active" : "tab"}>Heatmaps</div>
          </div>
          <table className="font-16">
            <thead>
              <th>&nbsp;</th>
              <th>Exp Date</th>
              <th>ATM</th>
              <th>25d R/R</th>
              <th>10d R/R</th>
              <th>25d B/F</th>
              <th>10d B/F <img src={arrow} alt="arrow" /></th>
            </thead>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>05 July, 2021</td>
              <td>7.10</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
              <td>-0.2</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
