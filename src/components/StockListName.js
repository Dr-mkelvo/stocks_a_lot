import { useMemo } from "react";
import Property1list from "./Property1list";
import List from "./List";
import "./StockListName.css";

const StockListName = ({
  arrow,
  arrow1,
  arrow2,
  stockListNamePadding,
  stockOverviewPriceWidth,
  backWidth,
  frameDivWidth,
  backColor,
  stockIncreaseHeight,
  askAndBidGap,
  listWidth,
  listHeight,
  backTop,
  backTop1,
  listWidth1,
  listHeight1,
  backTop2,
  backTop3,
  lineDivWidth,
  lineDivBorderTop,
  hiAndLoGap,
  listWidth2,
  listHeight2,
  backTop4,
  backTop5,
  listWidth3,
  listHeight3,
  backTop6,
  backTop7,
  lineDivWidth1,
  lineDivBorderTop1,
  hiAndLoGap1,
  listWidth4,
  listHeight4,
  backTop8,
  backTop9,
  listWidth5,
  listHeight5,
  backTop10,
  backTop11,
  lineDivWidth2,
  lineDivBorderTop2,
  hiAndLoGap2,
  listWidth6,
  listHeight6,
  backTop12,
  backTop13,
  listWidth7,
  listHeight7,
  backTop14,
  backTop15,
}) => {
  const stockListNameStyle = useMemo(() => {
    return {
      padding: stockListNamePadding,
    };
  }, [stockListNamePadding]);

  const property1list2Style = useMemo(() => {
    return {
      width: stockOverviewPriceWidth,
    };
  }, [stockOverviewPriceWidth]);

  const back4Style = useMemo(() => {
    return {
      width: backWidth,
    };
  }, [backWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const back5Style = useMemo(() => {
    return {
      color: backColor,
    };
  }, [backColor]);

  const stockIncreaseStyle = useMemo(() => {
    return {
      height: stockIncreaseHeight,
    };
  }, [stockIncreaseHeight]);

  const askAndBidStyle = useMemo(() => {
    return {
      gap: askAndBidGap,
    };
  }, [askAndBidGap]);

  const listStyle = useMemo(() => {
    return {
      width: listWidth,
      height: listHeight,
    };
  }, [listWidth, listHeight]);

  const back6Style = useMemo(() => {
    return {
      top: backTop,
    };
  }, [backTop]);

  const back7Style = useMemo(() => {
    return {
      top: backTop1,
    };
  }, [backTop1]);

  const listStyle1 = useMemo(() => {
    return {
      width: listWidth1,
      height: listHeight1,
    };
  }, [listWidth1, listHeight1]);

  const back6Style1 = useMemo(() => {
    return {
      top: backTop2,
    };
  }, [backTop2]);

  const back7Style1 = useMemo(() => {
    return {
      top: backTop3,
    };
  }, [backTop3]);

  const lineDivStyle = useMemo(() => {
    return {
      width: lineDivWidth,
      borderTop: lineDivBorderTop,
    };
  }, [lineDivWidth, lineDivBorderTop]);

  const hiAndLoStyle = useMemo(() => {
    return {
      gap: hiAndLoGap,
    };
  }, [hiAndLoGap]);

  const listStyle2 = useMemo(() => {
    return {
      width: listWidth2,
      height: listHeight2,
    };
  }, [listWidth2, listHeight2]);

  const back6Style2 = useMemo(() => {
    return {
      top: backTop4,
    };
  }, [backTop4]);

  const back7Style2 = useMemo(() => {
    return {
      top: backTop5,
    };
  }, [backTop5]);

  const listStyle3 = useMemo(() => {
    return {
      width: listWidth3,
      height: listHeight3,
    };
  }, [listWidth3, listHeight3]);

  const back6Style3 = useMemo(() => {
    return {
      top: backTop6,
    };
  }, [backTop6]);

  const back7Style3 = useMemo(() => {
    return {
      top: backTop7,
    };
  }, [backTop7]);

  const lineDiv1Style = useMemo(() => {
    return {
      width: lineDivWidth1,
      borderTop: lineDivBorderTop1,
    };
  }, [lineDivWidth1, lineDivBorderTop1]);

  const hiAndLo1Style = useMemo(() => {
    return {
      gap: hiAndLoGap1,
    };
  }, [hiAndLoGap1]);

  const listStyle4 = useMemo(() => {
    return {
      width: listWidth4,
      height: listHeight4,
    };
  }, [listWidth4, listHeight4]);

  const back6Style4 = useMemo(() => {
    return {
      top: backTop8,
    };
  }, [backTop8]);

  const back7Style4 = useMemo(() => {
    return {
      top: backTop9,
    };
  }, [backTop9]);

  const listStyle5 = useMemo(() => {
    return {
      width: listWidth5,
      height: listHeight5,
    };
  }, [listWidth5, listHeight5]);

  const back6Style5 = useMemo(() => {
    return {
      top: backTop10,
    };
  }, [backTop10]);

  const back7Style5 = useMemo(() => {
    return {
      top: backTop11,
    };
  }, [backTop11]);

  const lineDiv2Style = useMemo(() => {
    return {
      width: lineDivWidth2,
      borderTop: lineDivBorderTop2,
    };
  }, [lineDivWidth2, lineDivBorderTop2]);

  const hiAndLo2Style = useMemo(() => {
    return {
      gap: hiAndLoGap2,
    };
  }, [hiAndLoGap2]);

  const listStyle6 = useMemo(() => {
    return {
      width: listWidth6,
      height: listHeight6,
    };
  }, [listWidth6, listHeight6]);

  const back6Style6 = useMemo(() => {
    return {
      top: backTop12,
    };
  }, [backTop12]);

  const back7Style6 = useMemo(() => {
    return {
      top: backTop13,
    };
  }, [backTop13]);

  const listStyle7 = useMemo(() => {
    return {
      width: listWidth7,
      height: listHeight7,
    };
  }, [listWidth7, listHeight7]);

  const back6Style7 = useMemo(() => {
    return {
      top: backTop14,
    };
  }, [backTop14]);

  const back7Style7 = useMemo(() => {
    return {
      top: backTop15,
    };
  }, [backTop15]);

  return (
    <div className="stock-list-name" style={stockListNameStyle}>
      <Property1list
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        showBack={false}
        property1list2Width="343px"
        backWidth="75px"
        frameDivWidth="343px"
        backFontWeight="500"
        backColor="#0433bf"
        stockIncreaseHeight="42px"
        backFontWeight1="500"
      />
      <div className="ask-and-bid" style={askAndBidStyle}>
        <List
          back="56965"
          back1="Ask"
          listPosition="relative"
          listWidth="87px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="600"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="300"
          backTop1="56.36%"
        />
        <List
          back="55265.41"
          back1="Bid"
          listPosition="relative"
          listWidth="109px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="500"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="300"
          backTop1="56.36%"
        />
      </div>
      <div className="stock-list-name-child" style={lineDivStyle} />
      <div className="ask-and-bid" style={hiAndLoStyle}>
        <List
          back="57876"
          back1="24 h - hi"
          listPosition="relative"
          listWidth="87px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="500"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="300"
          backTop1="56.36%"
        />
        <List
          back="4100.54"
          back1="24 h - lo"
          listPosition="relative"
          listWidth="109px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="500"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="500"
          backTop1="56.36%"
        />
      </div>
      <div className="stock-list-name-child" style={lineDiv1Style} />
      <div className="hi-and-lo1" style={hiAndLo1Style}>
        <List
          back="57876"
          back1="Open"
          listPosition="relative"
          listWidth="87px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="900"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="900"
          backTop1="56.36%"
        />
        <List
          back="4100.54"
          back1="Close"
          listPosition="relative"
          listWidth="109px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="900"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="900"
          backTop1="56.36%"
        />
      </div>
      <div className="stock-list-name-inner" style={lineDiv2Style} />
      <div className="hi-and-lo1" style={hiAndLo2Style}>
        <List
          back="57876"
          back1="MKT Cap"
          listPosition="relative"
          listWidth="87px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="900"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="900"
          backTop1="56.36%"
        />
        <List
          back="4100.54"
          back1="P/E ratio"
          listPosition="relative"
          listWidth="109px"
          listHeight="55px"
          backFontFamily="Poppins"
          backFontWeight="900"
          backTop="-1.82%"
          backFontFamily1="Poppins"
          backFontWeight1="900"
          backTop1="56.36%"
        />
      </div>
    </div>
  );
};

export default StockListName;
