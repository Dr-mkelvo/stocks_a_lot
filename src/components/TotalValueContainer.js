import "./TotalValueContainer.css";

const TotalValueContainer = ({ financialMetric }) => {
  return (
    <div className="frame-parent30">
      <div className="frame-parent31">
        <div className="total-investment-group">
          <div className="total-investment1">{financialMetric}</div>
          <b className="ksh-10216531">Ksh. 10,216.53</b>
        </div>
        <div className="frame-parent32">
          <div className="day-container">
            <div className="day1">Day</div>
          </div>
          <div className="day-container">
            <div className="day1">{`Week `}</div>
          </div>
          <div className="month-container">
            <div className="month1">Month</div>
          </div>
        </div>
      </div>
      <div className="area-chart-container">
        <div className="area-chart7">
          <div className="vector-parent6">
            <img className="vector-icon69" alt="" src="/vector.svg" />
            <img className="vector-icon70" alt="" src="/vector.svg" />
            <img className="vector-icon71" alt="" src="/vector.svg" />
            <img className="vector-icon72" alt="" src="/vector.svg" />
            <img className="vector-icon73" alt="" src="/vector.svg" />
            <img className="vector-icon74" alt="" src="/vector.svg" />
            <div className="frame-child10" />
          </div>
          <div className="jan-group">
            <div className="jan1">Jan</div>
            <div className="jan1">Feb</div>
            <div className="jan1">Mar</div>
            <div className="jan1">Apr</div>
            <div className="jan1">May</div>
            <div className="jan1">Jun</div>
            <div className="jan1">Jul</div>
            <div className="jan1">Aug</div>
            <div className="jan1">Sep</div>
            <div className="jan1">Oct</div>
            <div className="jan1">Nov</div>
            <div className="jan1">Dec</div>
          </div>
          <div className="vector-parent7">
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
            <img className="vector-icon75" alt="" src="/vector.svg" />
          </div>
          <img className="vector-icon82" alt="" src="/vector.svg" />
          <img className="vector-icon83" alt="" src="/vector.svg" />
        </div>
      </div>
      <div className="aug-12-group">
        <div className="day1">Aug 12</div>
        <b className="ksh-9239121">Ksh. 9,239.12</b>
      </div>
      <div className="frame-child11" />
    </div>
  );
};

export default TotalValueContainer;
