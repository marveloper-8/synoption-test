import React, {useState, useEffect} from "react";
// styling
import "./styles/table.scss";
// icons
import arrow from '../icons/arrow.svg'
// components
import Empty from '../components/Empty'
import Loader from '../components/Loader'

const Table = (e) => {
  const [loading, setLoading] = useState(false)
  const [table1, setTable1] = useState([])
  const [table2, setTable2] = useState([]);


    useEffect(() => {
      var timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    });
    function tick() {
      fetch("https://synoption-test.herokuapp.com/rr-bf-table")
        .then((res) => res.json())
        .then((result) => {
          setTable1(result.posts);
          console.log(result.posts);
        });
      fetch("https://synoption-test.herokuapp.com/call-put-table")
        .then((res) => res.json())
        .then((result) => {
          setTable2(result.collections);
          console.log(result.collections);
        });
    }
    
  useEffect(() => {
      setLoading(true)
      fetch("https://synoption-test.herokuapp.com/rr-bf-table")
        .then((res) => res.json())
        .then((result) => {
          setLoading(false)
        });
    }, []);

  console.log(table1)
  const [active, setActive] = useState("rr");
  return (
    <div className="table-page bg-1">
      <div className="table-page-inner">
        <div className="table-head font-20 bg-2">
          <div>{`>>`} Single Currency Grid</div>
          <div>&times;</div>
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
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === "rr" &&
                  (table1.length < 1 ? (
                    <Empty text="RR/BF unavailable" />
                  ) : (
                    <>
                      <table className="font-16">
                        <thead>
                          <th>&nbsp;</th>
                          <th>Exp Date</th>
                          <th>ATM</th>
                          <th>25d R/R</th>
                          <th>10d R/R</th>
                          <th>25d B/F</th>
                          <th>
                            10d B/F <img src={arrow} alt="arrow" />
                          </th>
                        </thead>
                        {table1.map((item) => {
                          console.log(item);
                          return (
                            <tr>
                              <td>{item.measurement}</td>
                              <td>{item.expDate}</td>
                              <td>{item.atm}</td>
                              <td>{item.rr_25d}</td>
                              <td>{item.rr_10d}</td>
                              <td>{item.bf_25d}</td>
                              <td>{item.bf_10d}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </>
                  ))}
              </>
            )}
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === "call" &&
                  (table2.length < 1 ? (
                    <Empty text="Call/Put unavailable" />
                  ) : (
                    <>
                      <table className="font-16">
                        <thead>
                          <th>&nbsp;</th>
                          <th>Exp Date</th>
                          <th>ATM</th>
                          <th>25d R/R</th>
                          <th>10d R/R</th>
                          <th>25d B/F</th>
                          <th>
                            10d B/F <img src={arrow} alt="arrow" />
                          </th>
                        </thead>
                        {table2.map((item) => {
                          console.log(item);
                          return (
                            <tr>
                              <td>{item.measurement}</td>
                              <td>{item.expDate}</td>
                              <td>{item.atm}</td>
                              <td>{item.rr_25d}</td>
                              <td>{item.rr_10d}</td>
                              <td>{item.bf_25d}</td>
                              <td>{item.bf_10d}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </>
                  ))}
              </>
            )}
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === "curve" && <Empty text="Vol Curve unavailable" />}
              </>
            )}
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === "smile" && <Empty text="Vol Smile unavailable" />}
              </>
            )}
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === "heatmaps" && <Empty text="Heatmaps unavailable" />}
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;