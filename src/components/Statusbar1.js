import { useMemo } from "react";
import "./Statusbar1.css";

const Statusbar1 = ({
  logo,
  statusbarPosition,
  statusbarTop,
  statusbarLeft,
}) => {
  const statusbarStyle = useMemo(() => {
    return {
      position: statusbarPosition,
      top: statusbarTop,
      left: statusbarLeft,
    };
  }, [statusbarPosition, statusbarTop, statusbarLeft]);

  return (
    <div className="statusbar" style={statusbarStyle}>
      <div className="bg" />
      <div className="news">
        <div className="news-1">
          <div className="news-agency-time">
            <div className="label-2">1h ago</div>
            <div className="line" />
            <div className="label-1">News Media</div>
          </div>
          <div className="title">
            Microsoft, Tesla, Apple News and Price Data
          </div>
          <img className="image-icon" alt="" src="/image.svg" />
        </div>
        <div className="news-2">
          <div className="news-agency-time1">
            <div className="label-21">4h ago</div>
            <div className="line1" />
            <div className="label-1">News Media</div>
          </div>
          <div className="title">
            Coinbase’s Junk Bonds Show Tesla Really Is Going...
          </div>
          <img className="image-icon" alt="" src="/image.svg" />
        </div>
        <div className="news-3">
          <div className="news-agency-time1">
            <div className="label-21">5h ago</div>
            <div className="line1" />
            <div className="label-1">News Media</div>
          </div>
          <div className="title">
            JPMorgan CEO's statement made Tesla price fall...
          </div>
          <img className="image-icon" alt="" src="/image.svg" />
        </div>
        <div className="news-child" />
        <div className="news-item" />
        <div className="header">
          <div className="label">See All</div>
          <div className="title3">News</div>
        </div>
      </div>
      <div className="activities">
        <div className="list-1">
          <div className="info">
            <div className="label-23">Microsoft</div>
            <div className="label-13">Sell</div>
          </div>
          <img className="logo-icon" alt="" src="/logo.svg" />
          <div className="amount">
            <div className="usd">
              <div className="ksh-243580">Ksh. 2,435.80</div>
            </div>
            <div className="date">
              <div className="date1">Today</div>
              <div className="time">16.40</div>
              <div className="line3" />
            </div>
          </div>
        </div>
        <div className="list-2">
          <div className="info1">
            <div className="label-23">Tesla</div>
            <div className="label-13">Buy</div>
          </div>
          <div className="logo">
            <div className="bg1" />
            <img className="logo-icon1" alt="" src={logo} />
          </div>
          <div className="amount1">
            <div className="usd">
              <div className="ksh-243580">Ksh. 1,435.72</div>
            </div>
            <div className="date2">
              <div className="date1">Today</div>
              <div className="time">14.02</div>
              <div className="line3" />
            </div>
          </div>
        </div>
        <div className="list-3">
          <div className="info2">
            <div className="label-23">Apple</div>
            <div className="label-13">Buy</div>
          </div>
          <img className="logo-icon2" alt="" src="/logo.svg" />
          <div className="amount2">
            <div className="usd">
              <div className="ksh-243580">Ksh. 435.24</div>
            </div>
            <div className="date4">
              <div className="date1">Today</div>
              <div className="time2">10.12</div>
              <div className="line5" />
            </div>
          </div>
        </div>
        <div className="activities1">Activities</div>
        <div className="today">
          <div className="today1">Today</div>
          <img className="icon-chevron" alt="" src="/icon--chevron.svg" />
        </div>
      </div>
      <div className="line6" />
      <div className="my-balance">
        <div className="withdraw">
          <img className="bg-icon" alt="" src="/bg.svg" />
          <div className="content">
            <img className="icon-arrow-up" alt="" src="/icon--arrow-up.svg" />
            <div className="label2">Withdraw</div>
          </div>
        </div>
        <div className="withdraw1">
          <img className="bg-icon" alt="" src="/bg.svg" />
          <div className="content1">
            <img className="icon-arrow-up1" alt="" src="/icon--arrow-up.svg" />
            <div className="label3">Deposit</div>
          </div>
        </div>
        <div className="my-balances">My Balances</div>
        <img className="add-card-icon" alt="" src="/add-card.svg" />
        <div className="bitcoin">
          <div className="bg2" />
          <img className="ornament-icon" alt="" src="/ornament.svg" />
          <div className="dotted-line" />
          <div className="bitcoin1">Bitcoin</div>
          <b className="b1">1.84333767</b>
          <img
            className="icon-credit-card"
            alt=""
            src="/icon--credit-card.svg"
          />
        </div>
        <div className="us-dollar">
          <div className="bg3" />
          <img className="ornament-icon" alt="" src="/ornament.svg" />
          <b className="b2">80,435.712</b>
          <div className="kenya-sh">Kenya Sh.</div>
          <img
            className="icon-credit-card"
            alt=""
            src="/icon--credit-card.svg"
          />
          <div className="bitcoin2">
            <div className="div13">0,0014</div>
            <img className="icon-bitcoin" alt="" src="/icon--bitcoin.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statusbar1;
