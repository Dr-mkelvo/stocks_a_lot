import { useMemo } from "react";
import Property1VerticalRightTop from "./Property1VerticalRightTop";
import "./StockListTableView.css";

const StockListTableView = ({
  selection,
  back,
  back1,
  arrow,
  arrow1,
  arrow2,
  navigationalArrows,
  stockListTableViewWidth,
  stockListTableViewGap,
  stockListTableViewBorder,
  leftPadding,
  selectionIconHeight,
  stockMktPriceChangeWidth,
  stockMktPriceChangeHeight,
  backWidth,
}) => {
  const stockListTableViewStyle = useMemo(() => {
    return {
      width: stockListTableViewWidth,
      gap: stockListTableViewGap,
      border: stockListTableViewBorder,
    };
  }, [
    stockListTableViewWidth,
    stockListTableViewGap,
    stockListTableViewBorder,
  ]);

  const leftStyle = useMemo(() => {
    return {
      padding: leftPadding,
    };
  }, [leftPadding]);

  const selectionIconStyle = useMemo(() => {
    return {
      height: selectionIconHeight,
    };
  }, [selectionIconHeight]);

  const property1VerticalRightTopStyle = useMemo(() => {
    return {
      width: stockMktPriceChangeWidth,
      height: stockMktPriceChangeHeight,
    };
  }, [stockMktPriceChangeWidth, stockMktPriceChangeHeight]);

  const back9Style = useMemo(() => {
    return {
      width: backWidth,
    };
  }, [backWidth]);

  return (
    <div className="stock-list-table-view" style={stockListTableViewStyle}>
      <div className="left" style={leftStyle}>
        <img
          className="selection-icon"
          alt=""
          src={selection}
          style={selectionIconStyle}
        />
        <div className="company-name">
          <div className="back10">{back}</div>
          <div className="back11">{back1}</div>
        </div>
      </div>
      <div className="right">
        <Property1VerticalRightTop
          arrow="/arrow.svg"
          arrow1="/arrow.svg"
          arrow2="/arrow.svg"
          property1VerticalRightTopWidth="143px"
          property1VerticalRightTopHeight="68px"
          backFontWeight="300"
          backColor="#007f5f"
          backFontSize="14px"
          backFontWeight1="unset"
          backWidth="115px"
        />
        <img
          className="navigational-arrows-icon"
          alt=""
          src={navigationalArrows}
        />
      </div>
    </div>
  );
};

export default StockListTableView;
