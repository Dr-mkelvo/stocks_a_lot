import StockListTableView from "./StockListTableView";
import "./ContainerCardFormFilter.css";

const ContainerCardFormFilter = ({
  dimension,
  dimensionText,
  dimensionValue,
  dimensionTextValue,
  dimensionTextValueText,
  dimensionTextValueNumber,
  imageDimensions,
  imageDimensionsText,
  dimensionTextValueNumberT,
  imageDimensionsTextValueN,
  imageDimensionsTextValueN2,
  dimensionTextValueNumberT2,
}) => {
  return (
    <div className="stock-list-table-view-parent">
      <StockListTableView
        selection="/selection@2x.png"
        back="Apple Inc"
        back1="AAPL"
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        navigationalArrows="/navigational-arrows.svg"
        stockListTableViewWidth="314px"
        stockListTableViewGap="66.83px"
        stockListTableViewBorder="0.4px solid var(--color-cornflowerblue-100)"
        leftPadding="0px 0px 0px 21.97275161743164px"
        selectionIconHeight="79.7px"
        stockMktPriceChangeWidth="130.9px"
        stockMktPriceChangeHeight="62.3px"
        backWidth="105.3px"
      />
      <StockListTableView
        selection="/selection@2x.png"
        back="Microsoft Inc"
        back1="MSFT"
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        navigationalArrows="/navigational-arrows.svg"
        stockListTableViewWidth="314px"
        stockListTableViewGap="45.78px"
        stockListTableViewBorder="unset"
        leftPadding="0px 0px 0px 21.97275161743164px"
        selectionIconHeight="79.7px"
        stockMktPriceChangeWidth="130.9px"
        stockMktPriceChangeHeight="62.3px"
        backWidth="105.3px"
      />
      <StockListTableView
        selection="/selection@2x.png"
        back="Amazon Inc"
        back1="AMZN"
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        navigationalArrows="/navigational-arrows.svg"
        stockListTableViewWidth="314px"
        stockListTableViewGap="50.35px"
        stockListTableViewBorder="unset"
        leftPadding="0px 0px 0px 21.97275161743164px"
        selectionIconHeight="79.7px"
        stockMktPriceChangeWidth="130.9px"
        stockMktPriceChangeHeight="62.3px"
        backWidth="105.3px"
      />
      <StockListTableView
        selection="/selection@2x.png"
        back="Apple Inc"
        back1="AAPL"
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        navigationalArrows="/navigational-arrows.svg"
        stockListTableViewWidth="314px"
        stockListTableViewGap="66.83px"
        stockListTableViewBorder="unset"
        leftPadding="0px 0px 0px 21.97275161743164px"
        selectionIconHeight="79.7px"
        stockMktPriceChangeWidth="130.9px"
        stockMktPriceChangeHeight="62.3px"
        backWidth="105.3px"
      />
    </div>
  );
};

export default ContainerCardFormFilter;
