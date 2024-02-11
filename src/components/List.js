import { useMemo } from "react";
import "./List.css";

const List = ({
  back,
  back1,
  listPosition,
  listWidth,
  listHeight,
  backFontFamily,
  backFontWeight,
  backTop,
  backFontFamily1,
  backFontWeight1,
  backTop1,
}) => {
  const listStyle = useMemo(() => {
    return {
      position: listPosition,
      width: listWidth,
      height: listHeight,
    };
  }, [listPosition, listWidth, listHeight]);

  const back6Style = useMemo(() => {
    return {
      fontFamily: backFontFamily,
      fontWeight: backFontWeight,
      top: backTop,
    };
  }, [backFontFamily, backFontWeight, backTop]);

  const back7Style = useMemo(() => {
    return {
      fontFamily: backFontFamily1,
      fontWeight: backFontWeight1,
      top: backTop1,
    };
  }, [backFontFamily1, backFontWeight1, backTop1]);

  return (
    <div className="list" style={listStyle}>
      <b className="back8" style={back6Style}>
        {back}
      </b>
      <div className="back9" style={back7Style}>
        {back1}
      </div>
    </div>
  );
};

export default List;
