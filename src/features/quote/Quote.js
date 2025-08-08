import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./quoteSlice";

const Quote = () => {
  const { quote, author } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  const Quote = "SAI RAM";
  const Author = "HARI NIKESH & SHALINI";

  return (
    <div id="quote">
      <p className="quote-message">"{Quote}"</p>
      <p className="quote-author">{Author}</p>
    </div>
  );
};

export default Quote;
