import { useMemo } from "react";
import "./Investment.css";

const Investment = ({
  investmentLabel,
  divColor,
  divColor1,
  divColor2,
  divColor3,
  divColor4,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const div1Style = useMemo(() => {
    return {
      color: divColor1,
    };
  }, [divColor1]);

  const div2Style = useMemo(() => {
    return {
      color: divColor2,
    };
  }, [divColor2]);

  const div3Style = useMemo(() => {
    return {
      color: divColor3,
    };
  }, [divColor3]);

  const div4Style = useMemo(() => {
    return {
      color: divColor4,
    };
  }, [divColor4]);

  return (
    <div className="investment">
      <div className="frame-parent8">
        <div className="frame-parent9">
          <div className="total-investment-parent">
            <div className="total-investment">{investmentLabel}</div>
            <b className="ksh-1021653">Ksh. 10,216.53</b>
          </div>
          <div className="frame-parent10">
            <div className="day-wrapper">
              <div className="day">Day</div>
            </div>
            <div className="day-wrapper">
              <div className="day">{`Week `}</div>
            </div>
            <div className="month-wrapper">
              <div className="month">Month</div>
            </div>
          </div>
        </div>
        <div className="area-chart-wrapper">
          <div className="area-chart3">
            <div className="vector-parent1">
              <img className="vector-icon27" alt="" src="/vector.svg" />
              <img className="vector-icon28" alt="" src="/vector.svg" />
              <img className="vector-icon29" alt="" src="/vector.svg" />
              <img className="vector-icon30" alt="" src="/vector.svg" />
              <img className="vector-icon31" alt="" src="/vector.svg" />
              <img className="vector-icon32" alt="" src="/vector.svg" />
              <div className="ellipse-div" />
            </div>
            <div className="jan-parent">
              <div className="jan">Jan</div>
              <div className="jan">Feb</div>
              <div className="jan">Mar</div>
              <div className="jan">Apr</div>
              <div className="jan">May</div>
              <div className="jan">Jun</div>
              <div className="jan">Jul</div>
              <div className="jan">Aug</div>
              <div className="jan">Sep</div>
              <div className="jan">Oct</div>
              <div className="jan">Nov</div>
              <div className="jan">Dec</div>
            </div>
            <div className="vector-parent2">
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
              <img className="vector-icon33" alt="" src="/vector.svg" />
            </div>
            <img className="vector-icon40" alt="" src="/vector.svg" />
            <img className="vector-icon41" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="aug-12-parent">
          <div className="day">Aug 12</div>
          <b className="ksh-923912">Ksh. 9,239.12</b>
        </div>
        <div className="frame-child1" />
      </div>
      <div className="frame-parent11">
        <div className="stock-chart-parent">
          <div className="total-investment">Stock Chart</div>
          <div className="view-all-group">
            <div className="month">View All</div>
            <img
              className="icon-arrow-right1"
              alt=""
              src="/-icon-arrow-right.svg"
            />
          </div>
        </div>
        <div className="frame-parent12">
          <div className="parent">
            <b className="day">#</b>
            <b className="name">Name</b>
            <b className="name">Price</b>
            <b className="status">Status</b>
          </div>
          <div className="group">
            <div className="div3">1</div>
            <div className="amzn">NFLX</div>
            <div className="total-investment">Ksh. 416.03</div>
            <div className="div4" style={divStyle}>
              +2.37%
            </div>
          </div>
          <div className="group">
            <div className="div3">2</div>
            <div className="amzn">AMZN</div>
            <div className="total-investment">Ksh. 251.64</div>
            <div className="div4" style={div1Style}>
              +2.09%
            </div>
          </div>
          <div className="group">
            <div className="div3">3</div>
            <div className="amzn">AAPL</div>
            <div className="total-investment">Ksh. 178.61</div>
            <div className="div4" style={div2Style}>
              +1.36%
            </div>
          </div>
          <div className="group">
            <div className="div3">4</div>
            <div className="amzn">NFLX</div>
            <div className="total-investment">Ksh. 416.03</div>
            <div className="div4" style={div3Style}>
              +0.25%
            </div>
          </div>
          <div className="group">
            <div className="div3">5</div>
            <div className="amzn">META</div>
            <div className="total-investment">Ksh. 285.50</div>
            <div className="div12" style={div4Style}>
              -0.44%
            </div>
          </div>
        </div>
        <div className="frame-child2" />
      </div>
    </div>
  );
};

export default Investment;
