import { useMemo } from "react";
import "./StockChartContainer.css";

const StockChartContainer = ({ propTop, propLeft }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="frame-parent33" style={frameDiv4Style}>
      <div className="stock-chart-group">
        <div className="stock-chart1">Stock Chart</div>
        <div className="view-all-parent1">
          <div className="view-all3">View All</div>
          <img
            className="icon-arrow-right3"
            alt=""
            src="/-icon-arrow-right.svg"
          />
        </div>
      </div>
      <div className="frame-parent34">
        <div className="parent4">
          <b className="b3">#</b>
          <b className="name1">Name</b>
          <b className="name1">Price</b>
          <b className="status2">Status</b>
        </div>
        <div className="parent5">
          <div className="div43">1</div>
          <div className="nflx4">NFLX</div>
          <div className="stock-chart1">Ksh. 416.03</div>
          <div className="div44">+2.37%</div>
        </div>
        <div className="parent5">
          <div className="div43">2</div>
          <div className="nflx4">AMZN</div>
          <div className="stock-chart1">Ksh. 251.64</div>
          <div className="div44">+2.09%</div>
        </div>
        <div className="parent5">
          <div className="div43">3</div>
          <div className="nflx4">AAPL</div>
          <div className="stock-chart1">Ksh. 178.61</div>
          <div className="div44">+1.36%</div>
        </div>
        <div className="parent5">
          <div className="div43">4</div>
          <div className="nflx4">NFLX</div>
          <div className="stock-chart1">Ksh. 416.03</div>
          <div className="div44">+0.25%</div>
        </div>
        <div className="parent5">
          <div className="div43">5</div>
          <div className="nflx4">META</div>
          <div className="stock-chart1">Ksh. 285.50</div>
          <div className="div52">-0.44%</div>
        </div>
      </div>
      <div className="frame-child12" />
    </div>
  );
};

export default StockChartContainer;
